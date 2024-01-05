import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReturnDocsType } from './ReturnDocsType';
import { Props, Type } from '../../../../models/docsType';

const mockStyle = {
  docs_type: 'mock-docs-type',
};

describe('ReturnDocsType', () => {
  const renderComponent = (type: Type) => {
    const props: Props = {
      type,
      style: mockStyle,
    };

    render(<ReturnDocsType {...props} />);
  };

  it('renders the type name when type has a name', () => {
    renderComponent({ name: 'String', kind: 'SCALAR', ofType: null });
    expect(screen.getByText('String')).toBeInTheDocument();
  });

  it('renders the type name with NON_NULL suffix when kind is NON_NULL', () => {
    renderComponent({
      ofType: { name: 'String', kind: 'SCALAR', ofType: null },
      kind: 'NON_NULL',
      name: null,
    });
    expect(screen.getByText('String')).toBeInTheDocument();
    expect(screen.getByText('!')).toBeInTheDocument();
  });

  it('renders the LIST type with square brackets and inner type', () => {
    renderComponent({
      kind: 'LIST',
      ofType: { name: 'String', kind: 'SCALAR', ofType: null },
      name: null,
    });

    const container = screen.getByText('[', { exact: false }).parentNode;

    expect(container).toContainHTML('[');
    expect(container).toContainHTML(
      '<span class="mock-docs-type">String</span>'
    );
    expect(container).toContainHTML(']');
  });
  it('renders type.ofType.name when type.kind is NON_NULL', () => {
    const props = {
      type: {
        kind: 'NON_NULL',
        ofType: {
          name: 'String',
          kind: 'SCALAR',
          ofType: null,
        },
        name: null!,
      },
      style: {
        docs_type: 'mock-docs-type',
      },
    };

    const { container } = render(<ReturnDocsType {...props} />);

    expect(container).toContainHTML(
      '<span class="mock-docs-type">String</span>!'
    );
  });
  it('renders type.ofType.name when type.kind is NON_NULL', () => {
    const props = {
      type: {
        kind: 'NON_NULL',
        ofType: {
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
        name: null,
      },
      style: {
        docs_type: 'mock-docs-type',
      },
    };

    const { container } = render(<ReturnDocsType {...props} />);

    expect(container.innerHTML).toContain(
      '<span><span class="mock-docs-type">Int</span>!</span>'
    );
  });

  it('renders type.ofType.ofType.name when type.ofType.kind is NON_NULL', () => {
    const props = {
      type: {
        kind: 'SCALAR',
        ofType: {
          kind: 'NON_NULL',
          ofType: {
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
          name: null,
        },
        name: null,
      },
      style: {
        docs_type: 'mock-docs-type',
      },
    } as unknown as Props;

    const { container } = render(<ReturnDocsType {...props} />);

    expect(container.innerHTML).toContain(
      '<span>[<span class="mock-docs-type">Int</span>!]!</span>'
    );
  });
  it('renders TYPE when none of the conditions match', () => {
    const props = {
      type: {
        kind: 'SCALAR',
        ofType: null,
        name: null,
      },
      style: {
        docs_type: 'mock-docs-type',
      },
    };

    const { container } = render(<ReturnDocsType {...props} />);

    expect(container.innerHTML).toContain(
      '<span class="mock-docs-type">TYPE</span>'
    );
  });
});
