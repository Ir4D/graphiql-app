import { IntrospectionObjectType } from 'graphql';
import { ReturnDocsType } from '../ReturnDocsType/ReturnDocsType';

interface Props {
  queries: IntrospectionObjectType;
}

export const DocsQueries = (props: Props) => {
  const { queries } = props;

  return (
    queries && (
      <div className="docs-queries">
        {queries.fields.map((query) => (
          <div key={query.name}>
            <div>
              <span className="docs-query">{query.name}</span>
              <span>(</span>

              <span>
                {query.args &&
                  query.args.map((arg) => (
                    <div key={arg.name}>
                      <span className="docs-args">{arg.name}</span>:{' '}
                      <ReturnDocsType type={arg.type} />
                      {arg.defaultValue && (
                        <span>
                          {' '}
                          ={' '}
                          <span className="docs-defaultValue">
                            {arg.defaultValue}
                          </span>
                        </span>
                      )}
                    </div>
                  ))}
              </span>

              <span>
                ): <ReturnDocsType type={query.type} />
              </span>
            </div>
            <div>{query.description}</div>
          </div>
        ))}
      </div>
    )
  );
};
