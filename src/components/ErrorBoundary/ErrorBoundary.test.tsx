import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import { vi } from 'vitest';

describe('ErrorBoundary Component', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Rendered without errors</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Rendered without errors')).toBeInTheDocument();
  });

  it('should render error message when an error occurs', async () => {
    const errorMessage = 'Custom error message';
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary errorMessage={errorMessage}>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });
});

const ErrorThrowingComponent: React.FC = () => {
  throw new Error('Test error');
};
