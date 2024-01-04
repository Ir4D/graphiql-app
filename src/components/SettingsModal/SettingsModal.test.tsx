import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import SettingsModal from './SettingsModal';
import { vi } from 'vitest';

vi.mock('../../utils/localization/localizationContext', () => ({
  useLocalization: vi.fn(() => ({
    locale: 'en',
    messages: {
      en: {
        settings_title: 'Settings',
        settings_submit: 'Submit',
        settings_cancel: 'Cancel',
      },
    },
  })),
}));

describe('SettingsModal Component', () => {
  it('renders correctly when active', async () => {
    await act(async () => {
      render(
        <SettingsModal
          active={true}
          onSubmit={vi.fn()}
          onClose={vi.fn()}
        ></SettingsModal>
      );
    });

    const settingsModal = screen.getByTestId('settings-modal');
    const settingsTitle = screen.getByText('Settings');
    const submitButton = screen.getByText('Submit');
    const cancelButton = screen.getByText('Cancel');

    expect(settingsModal).toBeInTheDocument();
    expect(settingsTitle).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('does not render when not active', async () => {
    await act(async () => {
      render(
        <SettingsModal
          active={false}
          onSubmit={vi.fn()}
          onClose={vi.fn()}
        ></SettingsModal>
      );
    });

    const settingsModal = screen.queryByTestId('settings-modal');

    expect(settingsModal).not.toBeInTheDocument();
  });

  it('calls onSubmit and onClose when buttons are clicked', async () => {
    const onSubmit = vi.fn();
    const onClose = vi.fn();

    await act(async () => {
      render(
        <SettingsModal active={true} onSubmit={onSubmit} onClose={onClose}>
          <div>Settings Content</div>
        </SettingsModal>
      );
    });

    const submitButton = screen.getByText('Submit');
    const cancelButton = screen.getByText('Cancel');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);

    await act(async () => {
      fireEvent.click(cancelButton);
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
