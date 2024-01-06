import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Toast from './Toast';
import { vi } from 'vitest';

vi.useFakeTimers();

describe('Toast Component', () => {
  it('renders toast with message', () => {
    render(<Toast message="Hello, World!" />);
    const toastElement = screen.getByText('Hello, World!');
    expect(toastElement).toBeInTheDocument();
  });

  it('closes toast after the specified duration', () => {
    render(<Toast message="Hello, World!" duration={2000} />);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const toastElement = screen.queryByText('Hello, World!');
    expect(toastElement).not.toBeInTheDocument();
  });

  it('calls onClose callback when toast is closed', () => {
    const onCloseMock = vi.fn();
    render(<Toast message="Hello, World!" onClose={onCloseMock} />);

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(onCloseMock).toHaveBeenCalled();
  });
});
