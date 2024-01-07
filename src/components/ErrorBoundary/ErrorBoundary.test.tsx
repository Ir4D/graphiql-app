import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary Component', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Rendered without errors</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Rendered without errors')).toBeInTheDocument();
  });
});
