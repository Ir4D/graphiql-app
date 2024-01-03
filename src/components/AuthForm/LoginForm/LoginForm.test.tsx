import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import { vi } from 'vitest';

beforeEach(() => {
  vi.clearAllMocks();
});

vi.mock('@hookform/resolvers/yup', () => ({
  yupResolver: vi.fn(),
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

describe('LoginForm Component', () => {
  it('renders form fields with proper ids', () => {
    render(<LoginForm onClick={() => {}} />);

    expect(document.getElementById('email')).toBeInTheDocument();
    expect(document.getElementById('password')).toBeInTheDocument();
    expect(screen.getByTestId('pass_link')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    expect(screen.getByTestId('signup-link')).toBeInTheDocument();
  });

  it('displays validation errors for invalid input', async () => {
    render(<LoginForm onClick={() => {}} />);

    fireEvent.submit(screen.getByTestId('submit-button'));

    expect(await screen.findByTestId('email-error')).toBeInTheDocument();
    expect(await screen.findByTestId('password-error')).toBeInTheDocument();
  });
});
