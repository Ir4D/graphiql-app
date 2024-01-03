import { ReturnDocsType } from '../ReturnDocsType/ReturnDocsType';
import { DocsProps } from '../../../../models/docsQueriesType';

export const DocsQueries = (props: DocsProps) => {
  const { queries } = props;
  const { style } = props;

  return (
    queries && (
      <div className={style.docs_queries}>
        {queries.fields.map((query) => (
          <div key={query.name}>
            <div>
              <span className={style.docs_query}>{query.name}</span>
              <span>(</span>

              <span>
                {query.args &&
                  query.args.map((arg) => (
                    <div key={arg.name}>
                      <span className={style.docs_args}>{arg.name}</span>:{' '}
                      <ReturnDocsType style={style} type={arg.type} />
                      {arg.defaultValue && (
                        <span>
                          {' '}
                          ={' '}
                          <span className={style.docs_defaultValue}>
                            {arg.defaultValue}
                          </span>
                        </span>
                      )}
                    </div>
                  ))}
              </span>

              <span>
                ): <ReturnDocsType style={style} type={query.type} />
              </span>
            </div>
            <div>{query.description}</div>
          </div>
        ))}
      </div>
    )
  );
};
