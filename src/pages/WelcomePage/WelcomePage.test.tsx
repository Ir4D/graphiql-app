import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import { vi } from 'vitest';

vi.mock('../../components/Layout/Header/Header', () => ({
  Header: () => <div data-testid="mock-header">Mock Header</div>,
}));

vi.mock('../../utils/localization/localizationContext', () => ({
  useLocalization: vi.fn(() => ({
    locale: 'en',
    messages: {
      en: {
        welcome_heading: 'Welcome to GraphiQL',
        welcome_description:
          'GraphiQL is an in-browser IDE for writing, validating, and testing GraphQL queries.',
        create_description: 'Create your account or sign in here:',
        start_btn: "let's start!",
        Sign_in: 'Sign In',
        Sign_up: 'Sign Up',
        about_course: 'About the course',
        RSS_course: 'RS School React Course',
        course_description_1:
          'is a crash course through the most important React topics, such as React Router, redux, hooks, context and others.',
        course_description_2:
          'RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer community since 2013.',
        team: 'Our team',
        Irina: 'Irina',
        Dedova: 'Dedova',
        team_lead: 'Team Lead',
        contribution: 'Contribution',
        Yuliya: 'Yuliya',
        Narkevich: 'Narkevich',
        team_member: 'Team Member',
        Ilya: 'Ilya',
        Romanov: 'Romanov',
      },
    },
  })),
}));

describe('WelcomePage Component', () => {
  it('renders header and welcome content correctly', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <WelcomePage />
        </MemoryRouter>
      );
    });

    const mockHeader = screen.getByTestId('mock-header');
    const startButton = screen.getByRole('button', {
      name: /Sign In \/ Sign Up/i,
    });

    expect(mockHeader).toBeInTheDocument();
    expect(startButton).toBeInTheDocument();
  });

  it('renders team members information correctly', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <WelcomePage />
        </MemoryRouter>
      );
    });

    const teamLeadInfo = screen.getByText(/Irina Dedova/i);
    const teamMemberInfo1 = screen.getByText(/Yuliya Narkevich/i);
    const teamMemberInfo2 = screen.getByText(/Ilya Romanov/i);

    expect(teamLeadInfo).toBeInTheDocument();
    expect(teamMemberInfo1).toBeInTheDocument();
    expect(teamMemberInfo2).toBeInTheDocument();
  });
});
