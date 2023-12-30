import { render, fireEvent, screen } from '@testing-library/react';
import SlideControls from './SlideControls';
import { vi } from 'vitest';

test('SlideControls renders correctly', () => {
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

test('SlideControls switches tabs on click', () => {
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
