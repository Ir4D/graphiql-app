import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthForm from './AuthForm';
import { vi } from 'vitest';

vi.mock('./LoginForm/LoginForm', () => ({
  __esModule: true,
  default: vi.fn((props) => <div data-testid="login-form" {...props}></div>),
}));

vi.mock('./SignupForm/SignupForm', () => ({
  __esModule: true,
  default: vi.fn((props) => <div data-testid="signup-form" {...props}></div>),
}));

vi.mock('../SlideControls/SlideControls', () => ({
  __esModule: true,
  default: vi.fn((props) => (
    <div data-testid="slide-controls" {...props}></div>
  )),
}));

describe('AuthForm Component', () => {
  it('renders LoginForm when isLogin is true', () => {
    render(
      <AuthForm
        isLogin={true}
        handleLoginClick={vi.fn()}
        handleSignupClick={vi.fn()}
        handleSignupLinkClick={vi.fn()}
      />
    );
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  it('renders SignupForm when isLogin is false', () => {
    render(
      <AuthForm
        isLogin={false}
        handleLoginClick={vi.fn()}
        handleSignupClick={vi.fn()}
        handleSignupLinkClick={vi.fn()}
      />
    );
    expect(screen.getByTestId('signup-form')).toBeInTheDocument();
  });

  it('renders SlideControls with proper props', () => {
    render(
      <AuthForm
        isLogin={true}
        handleLoginClick={vi.fn()}
        handleSignupClick={vi.fn()}
        handleSignupLinkClick={vi.fn()}
      />
    );
    expect(screen.getByTestId('slide-controls')).toBeInTheDocument();
  });
});
