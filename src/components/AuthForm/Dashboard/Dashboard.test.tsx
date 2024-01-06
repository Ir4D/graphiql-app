import { act, fireEvent, render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { MemoryRouter } from 'react-router-dom';
import * as firebaseModule from '../../../utils/firebase/firebase';
import { vi } from 'vitest';

describe('Dashboard Component', () => {
  beforeEach(() => {
    vi.spyOn(firebaseModule, 'logout').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render user name and email when authenticated', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      );
    });

    const userName = await screen.findByTestId('dashboard-user-name');
    const email = await screen.findByTestId('dashboard-email');

    expect(userName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it('should logout user on button click', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      );
    });

    const logoutButton = await screen.findByText('Logout');
    fireEvent.click(logoutButton);

    expect(firebaseModule.logout).toHaveBeenCalled();
  });

  it('should fetch user name from Firestore and display it', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      );
    });

    const userName = await screen.findByTestId('dashboard-user-name');

    expect(userName).toBeInTheDocument();
  });
});
