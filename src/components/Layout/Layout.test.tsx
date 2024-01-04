import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';
import { vi } from 'vitest';

vi.mock('./Footer/Footer', () => ({
  Footer: () => <div data-testid="mock-footer">Mock Footer</div>,
}));

describe('Layout Component', () => {
  it('renders Footer component', () => {
    render(<Layout />);

    const mockFooter = screen.getByTestId('mock-footer');

    expect(mockFooter).toBeInTheDocument();
  });
});
