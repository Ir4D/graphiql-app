import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Query from './Query';
import { vi } from 'vitest';

const mockFetch = vi.fn();
vi.mock('../../utils/helpers/ParseHeaders', () => ({
  default: vi.fn(() => ({})),
}));

vi.mock('../../components/Toast/Toast', () => {
  interface ToastMockProps {
    message: string;
    onClose: () => void;
  }
  const ToastMock: React.FC<ToastMockProps> = ({ message, onClose }) => (
    <div className="_toast_d9f17e" onClick={onClose}>
      {message}
    </div>
  );

  return {
    __esModule: true,
    default: ToastMock,
  };
});

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
  it('renders error message on 400 response and hides toast on click', async () => {
    const mockErrorResponse = {
      errors: [
        {
          message: 'Syntax Error: Unexpected Name "dfd"',
          locations: [
            {
              line: 1,
              column: 1,
            },
          ],
          extensions: {
            code: 'GRAPHQL_PARSE_FAILED',
          },
        },
      ],
    };

    mockFetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockErrorResponse),
      ok: false,
      status: 400,
    });

    render(<Query />);

    await waitFor(() => {
      expect(
        screen.getByText(/Shomethis wrong with this query/)
      ).toBeInTheDocument();
    });
    const toastElement = screen.getByText(/Shomethis wrong with this query/);
    toastElement.click();
    await waitFor(() => {
      expect(screen.queryByText(/Shomethis wrong with this query/)).toBeNull();
    });
  });
});
