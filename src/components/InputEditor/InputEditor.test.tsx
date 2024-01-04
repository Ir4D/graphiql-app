import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import InputEditor from './InputEditor';
import { vi } from 'vitest';

describe('InputEditor component', () => {
  const mockOnChange = vi.fn();
  it('renders correctly', async () => {
    render(
      <InputEditor
        value=""
        onChange={() => {}}
        placeholder="Test Placeholder"
        title="Test Title"
      />
    );

    await act(async () => {
      expect(screen.getByTestId('title-test-id')).toBeInTheDocument();
      expect(screen.queryByTestId('textarea-test-id')).toBeNull();
    });
  });

  it('toggles textarea on title click', async () => {
    render(
      <InputEditor
        value=""
        onChange={mockOnChange}
        placeholder="Test Placeholder"
        title="Test Title"
      />
    );

    expect(screen.queryByTestId('textarea-test-id')).not.toBeInTheDocument();

    const titleElement = screen.getByTestId('title-test-id');
    fireEvent.click(titleElement);
    expect(screen.getByTestId('textarea-test-id')).toBeInTheDocument();
    fireEvent.click(titleElement);

    expect(screen.queryByTestId('textarea-test-id')).toBeNull();
  });

  it('calls onChange handler on textarea value change', async () => {
    render(
      <InputEditor
        value=""
        onChange={mockOnChange}
        placeholder="Test Placeholder"
        title="Test Title"
      />
    );

    const titleElement = screen.getByTestId('title-test-id');
    fireEvent.click(titleElement);

    await new Promise((resolve) => setTimeout(resolve, 0));

    const textareaElement = screen.getByTestId('textarea-test-id');
    fireEvent.change(textareaElement, { target: { value: 'new value' } });

    expect(mockOnChange).toHaveBeenCalledWith('new value');
  });
});
