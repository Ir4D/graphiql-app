import { useState } from 'react';
import { IntrospectionType } from 'graphql';

interface Props {
  types: ReadonlyArray<IntrospectionType>;
  style: CSSModuleClasses;
}

export const DocsTypes = (props: Props) => {
  const { types } = props;
  const { style } = props;
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
      <div className={style.docs_types}>
        {types.map((type, index) => (
          <div key={type.name}>
            <span>
              <button
                className={
                  type.description || (type.kind === 'OBJECT' && type.fields)
                    ? `${style.docs_type} ${style.docs_link}`
                    : style.docs_type
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
                <span className={style.docs_symbol}> ▼</span>
              ) : null}
            </span>

            {openType[index] && (
              <div className={style.docs_nested}>
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
