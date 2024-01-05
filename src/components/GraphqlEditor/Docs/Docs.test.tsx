import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Docs from './Docs';

describe('Docs component', () => {
  const mockSchema = {
    queryType: { name: 'QueryRoot' },
    types: [
      { kind: 'OBJECT', name: 'QueryRoot' },
      { kind: 'OBJECT', name: 'User' },
      { kind: 'OBJECT', name: 'Post' },
    ],
  };

  it('renders without crashing', () => {
    const { container } = render(<Docs schema={mockSchema} />);
    expect(container).toBeInTheDocument();
  });

  it('toggles Types section when clicking the button', async () => {
    render(<Docs schema={mockSchema} />);

    const typesButton = screen.getByText('Types');
    fireEvent.click(typesButton);

    await waitFor(() => {
      expect(screen.getByText('User')).not.toBeNull();
      expect(screen.getByText('Post')).not.toBeNull();
    });
  });
});
