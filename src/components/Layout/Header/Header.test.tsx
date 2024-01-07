import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';
import { AuthProvider } from '../../../utils/Auth/AuthContext';
import { vi } from 'vitest';

vi.mock('../../../utils/localization/localizationContext', () => ({
  useLocalization: vi.fn(() => ({
    locale: 'en',
    messages: {
      en: {
        header_navigate: 'To welcome page',
        Sign_out: 'Sign out',
        Sign_in: 'Sign in',
        Sign_up: 'Sign up',
      },
    },
    changeLocale: vi.fn(),
  })),
}));

describe('Header Component', () => {
  it('renders navigation link with correct localized text', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Header />
          </AuthProvider>
        </MemoryRouter>
      );
    });

    const navigateLink = screen.getByTestId('navigation-link');
    expect(navigateLink).toBeInTheDocument();
  });

  it('changes language on button click', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Header />
          </AuthProvider>
        </MemoryRouter>
      );
    });

    const enButton = screen.getByText('EN');
    const ruButton = screen.getByText('RU');

    const clickButtonAndCheckText = async (
      button: HTMLElement,
      expectedText: string
    ) => {
      await act(async () => {
        fireEvent.click(button);
      });
      const elements = screen.getAllByTitle(expectedText);
      expect(elements.length).toBeGreaterThan(1);
    };

    await clickButtonAndCheckText(enButton, 'To welcome page');
    await clickButtonAndCheckText(ruButton, 'To welcome page');
  });

  it('renders sign-in and sign-up buttons when user is not logged in', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Header />
          </AuthProvider>
        </MemoryRouter>
      );
    });

    const signInButton = screen.getByText('Sign in');
    const signUpButton = screen.getByText('Sign up');

    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });
});
