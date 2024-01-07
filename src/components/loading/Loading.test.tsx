import React from 'react';
import { render } from '@testing-library/react';
import LoadingComponent from './Loading';

describe('LoadingComponent', () => {
  it('renders without crashing', () => {
    render(<LoadingComponent />);
  });

  it('renders the GraphQL logo', () => {
    const { getByAltText } = render(<LoadingComponent />);
    const logoElement = getByAltText('graphql logo');
    expect(logoElement).toBeInTheDocument();
  });
});
