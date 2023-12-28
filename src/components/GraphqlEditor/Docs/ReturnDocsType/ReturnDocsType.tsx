import { Props } from '../../../../models/docsType';

export const ReturnDocsType = (props: Props) => {
  const { type } = props;

  console.log(props);
  if (type.kind === 'LIST') {
    return (
      <span>
        [<span className="docs-type">{type?.ofType?.name}</span>]
      </span>
    );
  }

  if (type.name) {
    return <span className="docs-type">{type.name}</span>;
  }

  if (type?.ofType?.name) {
    if (type.kind === 'NON_NULL') {
      return (
        <span>
          <span className="docs-type">{type.ofType.name}</span>!
        </span>
      );
    }
    return <span className="docs-type">{type.ofType.name}</span>;
  }

  if (type?.ofType?.ofType?.name) {
    if (type.ofType.kind === 'NON_NULL') {
      return (
        <span>
          [<span className="docs-type">{type.ofType.ofType.name}</span>!]!
        </span>
      );
    }
    return (
      <span>
        [<span className="docs-type">{type.ofType.ofType.name}</span>]
      </span>
    );
  }

  if (type?.ofType?.ofType?.ofType?.name) {
    if (type.ofType.ofType.kind === 'NON_NULL') {
      return (
        <span>
          [<span className="docs-type">{type.ofType.ofType.ofType.name}</span>
          !]!
        </span>
      );
    }
    return (
      <span>
        [<span className="docs-type">{type.ofType.ofType.ofType.name}</span>]
      </span>
    );
  }

  return <span className="docs-type">TYPE</span>;
};
