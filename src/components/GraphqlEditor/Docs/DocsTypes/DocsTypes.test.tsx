import { render, screen, waitFor } from '@testing-library/react';
import { DocsTypes } from './DocsTypes';
import userEvent from '@testing-library/user-event';
import {
  mockFields,
  transformFieldsToTypes,
} from '../../../../tests/mocks/DocsTypesMocks';

describe('DocsTypes', () => {
  it('renders without errors', async () => {
    const mockTypes = transformFieldsToTypes([...mockFields]);
    render(<DocsTypes types={mockTypes} style={{}} />);

    expect(screen.getByText('field1')).toBeInTheDocument();
    expect(screen.getByText('field2')).toBeInTheDocument();
  });

  it('toggles type details when clicking on a type button', async () => {
    const mockTypes = transformFieldsToTypes([...mockFields]);
    render(<DocsTypes types={mockTypes} style={{}} />);

    const typeButton = screen.getByText('field1');
    expect(screen.queryByText('FIELDS: field1')).not.toBeInTheDocument();

    userEvent.click(typeButton);
    await waitFor(() => {
      expect(screen.getByText('FIELDS: field1')).toBeInTheDocument();
    });

    userEvent.click(typeButton);
    await waitFor(() => {
      expect(screen.queryByText('FIELDS: field1')).not.toBeInTheDocument();
    });
  });

  it('displays the ▼ symbol for types with additional information', async () => {
    const mockTypes = transformFieldsToTypes([...mockFields]);
    render(<DocsTypes types={mockTypes} style={{}} />);
    const symbols = screen.queryAllByText('▼');

    expect(symbols).toHaveLength(2);

    expect(screen.getByText('field1').parentElement).toContainElement(
      symbols[0]
    );
    expect(screen.getByText('field2').parentElement).toContainElement(
      symbols[1]
    );
  });
});
