import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Reset } from './Reset';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({
    currentUser: {
      uid: 'testUserId',
      email: 'test@example.com',
    },
    sendPasswordResetEmail: vi.fn(),
    onAuthStateChanged: vi.fn().mockImplementation((listener) => {
      listener({ uid: 'testUserId', email: 'test@example.com' });
      return vi.fn();
    }),
  })),
  useAuthState: vi.fn(() => [{}, false]),
}));

describe('Reset component', () => {
  it('renders Reset component correctly', async () => {
    render(
      <MemoryRouter>
        <Reset />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByPlaceholderText('E-mail Address')).toBeInTheDocument();
      expect(screen.getByText('Send password reset email')).toBeInTheDocument();
      expect(screen.queryByText(/don'?t have an account/i)).toBeNull();
    });
  });
});
