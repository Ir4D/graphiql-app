import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import { vi } from 'vitest';

// Мокаем зависимости
vi.mock('../../components/Layout/Header/Header', () => ({
  __esModule: true,
  Header: vi.fn(() => <div data-testid="header"></div>),
}));

describe('NotFoundPage Component', () => {
  it('renders Header', () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
