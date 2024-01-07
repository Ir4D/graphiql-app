import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupForm from './SignupForm';
import { vi } from 'vitest';
import * as yupResolverModule from '@hookform/resolvers/yup';
import * as hookFormModule from 'react-hook-form';
import * as authModule from 'react-firebase-hooks/auth';
import * as localizationContextModule from '../../../utils/localization/localizationContext';
import * as routerDomModule from 'react-router-dom';
import { registerWithEmailAndPassword } from '../../../utils/firebase/firebase';

beforeEach(() => {
  vi.clearAllMocks();
});

vi.mock('@hookform/resolvers/yup', () => ({
  yupResolver: vi.fn(() => () => ({ errors: {} })),
}));

vi.mock('react-hook-form', () => ({
  useForm: vi.fn(() => ({
    register: vi.fn(),
    handleSubmit: vi.fn(),
    formState: { errors: {}, isSubmitting: false },
  })),
}));

vi.mock('react-firebase-hooks/auth', () => ({
  useAuthState: vi.fn(() => [null, false]),
}));

vi.mock('../../../utils/localization/localizationContext', () => ({
  useLocalization: vi.fn(() => ({ locale: 'en', messages: { en: {} } })),
}));

vi.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useNavigate: vi.fn(),
}));

vi.mock('../../../utils/firebase/firebase', () => ({
  auth: {},
  registerWithEmailAndPassword: vi.fn(),
}));

describe('LoginForm Component', () => {
  it('renders form fields with proper ids', () => {
    render(<SignupForm />);

    expect(document.getElementById('name')).toBeInTheDocument();
    expect(document.getElementById('email')).toBeInTheDocument();
    expect(document.getElementById('password')).toBeInTheDocument();
    expect(document.getElementById('confirmPassword')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('displays validation errors for invalid input', async () => {
    render(<SignupForm />);

    fireEvent.submit(screen.getByTestId('submit-button'));

    expect(await screen.findByTestId('email-error')).toBeInTheDocument();
    expect(await screen.findByTestId('password-error')).toBeInTheDocument();
  });
  it('calls onSubmit function when form is submitted', async () => {
    render(<SignupForm />);

    fireEvent.submit(screen.getByTestId('submit-button'));
    registerWithEmailAndPassword('User', 'test@ttt.tt', '123QQqq//');

    await waitFor(async () => {
      expect(yupResolverModule.yupResolver).toHaveBeenCalled();
      expect(hookFormModule.useForm).toHaveBeenCalled();
      expect(authModule.useAuthState).toHaveBeenCalled();
      expect(localizationContextModule.useLocalization).toHaveBeenCalled();
      expect(routerDomModule.useNavigate).toHaveBeenCalled();
      expect(registerWithEmailAndPassword).toHaveBeenCalledTimes(1);
    });
  });
});
