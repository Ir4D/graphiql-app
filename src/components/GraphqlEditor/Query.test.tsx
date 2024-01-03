import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Query from './Query';
import { vi } from 'vitest';

const mockFetch = vi.fn();
vi.mock('../../utils/helpers/ParseHeaders', () => ({
  default: vi.fn(() => ({})),
}));

global.fetch = mockFetch;

describe('Query component', () => {
  it('renders loading state and fetches data', async () => {
    const mockData = { data: { example: 'test data' } };
    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    render(<Query />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
      expect(screen.queryByText(/GraphQL request error/i)).toBeNull();
      expect(screen.getByText(/test data/i)).toBeInTheDocument();
    });
  });

  it('handles GraphQL request error', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Fetch error'));
    const originalConsoleError = console.error;
    const consoleErrorMock = vi.fn();
    console.error = consoleErrorMock;
    render(<Query />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => {
      expect(consoleErrorMock).toHaveBeenCalledWith(
        'GraphQL request error:',
        expect.any(Error)
      );
    });
    expect(screen.queryByText('Loading...')).toBeInTheDocument();
    console.error = originalConsoleError;
  });
});
