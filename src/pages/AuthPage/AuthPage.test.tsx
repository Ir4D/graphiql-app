import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthPage from './AuthPage';
import { vi } from 'vitest';

vi.mock('../../components/AuthForm/AuthForm', () => ({
  __esModule: true,
  default: vi.fn((props) => <div data-testid="auth-form" {...props}></div>),
}));

vi.mock('../../components/Layout/Header/Header', () => ({
  __esModule: true,
  Header: vi.fn(() => <div data-testid="header"></div>),
}));

vi.mock('../../utils/Auth/AuthContext', () => ({
  __esModule: true,
  useAuth: vi.fn(() => ({
    isLogin: false,
    toggleLoginStatus: vi.fn(),
    setLoginStatus: vi.fn(),
  })),
}));

describe('AuthPage Component', () => {
  it('renders Header', () => {
    render(<AuthPage />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders AuthForm with proper props', () => {
    render(<AuthPage />);
    expect(screen.getByTestId('auth-form')).toBeInTheDocument();
  });
});
