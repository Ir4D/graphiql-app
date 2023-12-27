import { useState } from 'react';
import { IntrospectionType } from 'graphql';

interface Props {
  types: ReadonlyArray<IntrospectionType>;
}

export const DocsTypes = (props: Props) => {
  const { types } = props;
  const [openType, setOpenType] = useState<boolean[]>(
    Array(types.length).fill(false)
  );

  const updateValue = (index: number) => {
    setOpenType(() => {
      const updatedState = [...openType];
      updatedState[index] = !openType[index];
      return updatedState;
    });
  };

  return (
    types && (
      <div className="docs-types">
        {types.map((type, index) => (
          <div key={type.name}>
            <span>
              <button
                className={
                  type.description || (type.kind === 'OBJECT' && type.fields)
                    ? 'docs-type docs-link'
                    : 'docs-type'
                }
                onClick={() => {
                  if (
                    type.description ||
                    (type.kind === 'OBJECT' && type.fields)
                  ) {
                    updateValue(index);
                  }
                }}
              >
                {type.name}
              </button>
              {(type.description || (type.kind === 'OBJECT' && type.fields)) &&
              !openType[index] ? (
                <span className="docs-symbol"> ▼</span>
              ) : null}
            </span>

            {openType[index] && (
              <div className="docs-nested">
                {type.description && <div>{type.description}</div>}
                {type.kind === 'OBJECT' && type.fields && (
                  <div>
                    FIELDS: {type.fields.map((field) => field.name).join(', ')}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  );
};
