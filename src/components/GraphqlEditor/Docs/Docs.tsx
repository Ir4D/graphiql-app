import React, { useState, useEffect } from 'react';
import { useQueryContext } from '../../../utils/QueryContext/QueryContext';
import {
  IntrospectionObjectType,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';
import getSchema from '../../../utils/getSchema/getSchema';
import { DocsTypes } from './DocsTypes/DocsTypes';
import { DocsQueries } from './DocsQueries/DocsQueries';

function Docs() {
  //TODO: добавить классы в один файл, а потом style раздать зависимым и заменить все классы на style.что-то там
  const { apiUrl } = useQueryContext();
  const [openTypes, setOpenTypes] = useState<boolean>(false);
  const [openQueries, setOpenQueries] = useState<boolean>(false);
  const [schema, setSchema] = useState<IntrospectionSchema | null>(null);
  const queryType = schema?.types.find(({ name }) => name === 'Query');
  const mainTypes = schema?.types.filter(
    ({ name }) => name !== 'Query' && !name.startsWith('__')
  );

  useEffect(() => {
    (async () => {
      setSchema(await getSchema(apiUrl));
      console.log(await schema);
    })();
  }, [apiUrl]);

  return (
    schema && (
      <div className="docs">
        <span>
          <button
            className="docs-link docs-base"
            onClick={() => {
              setOpenTypes(!openTypes);
            }}
          >
            Types
          </button>
          {!openTypes && <span className="docs-symbol"> ▼</span>}
        </span>

        {openTypes && (
          <div className="docs-nested">
            <DocsTypes types={mainTypes as ReadonlyArray<IntrospectionType>} />
          </div>
        )}
        <span>
          <button
            className="docs-link docs-base"
            onClick={() => {
              setOpenQueries(!openQueries);
            }}
          >
            Query
          </button>
          {!openQueries && <span className="docs-symbol"> ▼</span>}
        </span>

        {openQueries && (
          <div className="docs-nested">
            <DocsQueries queries={queryType as IntrospectionObjectType} />
          </div>
        )}
      </div>
    )
  );
}

export default Docs;
