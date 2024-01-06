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
      ok: true,
    });

    render(<Query />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
      expect(screen.queryByText(/GraphQL request error/i)).toBeNull();
      expect(screen.getByText(/test data/i)).toBeInTheDocument();
    });
  });
});
