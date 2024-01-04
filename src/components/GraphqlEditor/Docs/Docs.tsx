import React, { useState, useEffect } from 'react';
import { useQueryContext } from '../../../utils/QueryContext/QueryContext';
import getSchema from '../../../utils/getSchema/getSchema';
import { DocsTypes } from './DocsTypes/DocsTypes';
import { DocsQueries } from './DocsQueries/DocsQueries';
import { DocsQueriesType } from '../../../models/docsQueriesType';
import { IntrospectionType } from 'graphql';
import style from './Docs.module.scss';

export interface DocsSchema {
  queryType: { name: string };
  types: Array<DocsMainType>;
}

interface DocsMainType {
  kind: string;
  name: string;
}

function Docs() {
  const { apiUrl } = useQueryContext();
  const [openTypes, setOpenTypes] = useState<boolean>(false);
  const [openQueries, setOpenQueries] = useState<boolean>(false);
  const [schema, setSchema] = useState<DocsSchema | null>(null);

  const queryRootName = schema?.queryType.name;
  const queryType = schema?.types.find(({ name }) => name === queryRootName);
  const mainTypes = schema?.types.filter(
    ({ name }) => name !== queryRootName && !name.startsWith('__')
  );

  useEffect(() => {
    (async () => {
      setSchema(await getSchema(apiUrl));
    })();
  }, [apiUrl]);

  return (
    schema && (
      <div className={style.docs}>
        <span>
          <button
            className={`${style.docs_link} ${style.docs_base}`}
            onClick={() => {
              setOpenTypes(!openTypes);
            }}
          >
            Types
          </button>
          {!openTypes && <span className={style.docs_symbol}> ▼</span>}
        </span>

        {openTypes && (
          <div className={style.docs_nested}>
            <DocsTypes
              style={style}
              types={mainTypes as ReadonlyArray<IntrospectionType>}
            />
          </div>
        )}
        <span>
          <button
            className={`${style.docs_link} ${style.docs_base}`}
            onClick={() => {
              setOpenQueries(!openQueries);
            }}
          >
            Query
          </button>
          {!openQueries && <span className={style.docs_symbol}> ▼</span>}
        </span>

        {openQueries && (
          <div className={style.docs_nested}>
            <DocsQueries style={style} queries={queryType as DocsQueriesType} />
          </div>
        )}
      </div>
    )
  );
}

export default Docs;
