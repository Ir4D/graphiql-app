import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { vi } from 'vitest';

vi.mock('../../../utils/localization/localizationContext', () => ({
  useLocalization: vi.fn(() => ({
    locale: 'en',
    messages: {
      en: {
        Irina: 'Irina',
        Dedova: 'Dedova',
        Yuliya: 'Yuliya',
        Narkevich: 'Narkevich',
        Ilya: 'Ilya',
        Romanov: 'Romanov',
      },
    },
  })),
}));

describe('Footer Component', () => {
  it('renders the current year', () => {
    render(<Footer />);

    const yearSpan = screen.getByText(/2024/);
    expect(yearSpan).toBeInTheDocument();
  });

  it('renders the RSS School link with correct URL', () => {
    render(<Footer />);

    const rssSchoolLink = screen.getByRole('link', { name: '' });
    expect(rssSchoolLink).toBeInTheDocument();
    expect(rssSchoolLink).toHaveAttribute('href', 'https://rs.school/react/');
  });

  it('renders authors with correct names and links', () => {
    render(<Footer />);

    const irinaLink = screen.getByRole('link', { name: /Irina_Dedova/i });
    const yuliyaLink = screen.getByRole('link', { name: /Yuliya_Narkevich/i });
    const ilyaLink = screen.getByRole('link', { name: /Ilya_Romanov/i });

    expect(irinaLink).toHaveAttribute('href', 'https://github.com/Ir4D');
    expect(yuliyaLink).toHaveAttribute('href', 'https://github.com/Yuliya0503');
    expect(ilyaLink).toHaveAttribute('href', 'https://github.com/DragonRomeo');
  });
});
