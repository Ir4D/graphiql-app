import { render } from '@testing-library/react';
import { DocsQueries } from './DocsQueries';
import mockProps from '../../../../tests/mocks/DocsQueriesMock';

describe('DocsQueries Component', () => {
  it('renders without crashing', () => {
    render(<DocsQueries {...mockProps} />);
  });

  it('renders queries correctly', () => {
    const { getByText } = render(<DocsQueries {...mockProps} />);

    mockProps.queries.fields.forEach((query) => {
      expect(getByText(query.name)).toBeInTheDocument();
    });
  });
});
