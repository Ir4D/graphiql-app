import { render, fireEvent, screen } from '@testing-library/react';
import SlideControls from './SlideControls';
import { vi } from 'vitest';

describe('SlideControls Component', () => {
  it('SlideControls renders correctly', () => {
    render(
      <SlideControls
        isLogin={true}
        handleLoginClick={() => {}}
        handleSignupClick={() => {}}
      />
    );

    expect(screen.getByTestId('login')).toBeInTheDocument();
    expect(screen.getByTestId('signup')).toBeInTheDocument();
  });

  it('SlideControls calls handleSignupClick on login tab click', () => {
    const handleLoginClick = vi.fn();
    const handleSignupClick = vi.fn();

    render(
      <SlideControls
        isLogin={true}
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
      />
    );

    fireEvent.click(screen.getByTestId('signup'));

    expect(handleLoginClick).not.toHaveBeenCalled();
    expect(handleSignupClick).toHaveBeenCalled();
  });
  it('SlideControls calls handleLoginClick on login tab click', () => {
    const handleLoginClick = vi.fn();
    const handleSignupClick = vi.fn();

    render(
      <SlideControls
        isLogin={false}
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
      />
    );

    fireEvent.click(screen.getByTestId('login'));

    expect(handleLoginClick).toHaveBeenCalled();
    expect(handleSignupClick).not.toHaveBeenCalled();
  });
});
