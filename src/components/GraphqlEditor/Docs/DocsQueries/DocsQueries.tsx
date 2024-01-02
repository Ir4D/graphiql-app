import { ReturnDocsType } from '../ReturnDocsType/ReturnDocsType';
import { ofType } from '../../../../models/docsType';

export interface DocsProps {
  queries: DocsQueries;
}

export interface DocsQueries {
  description: string;
  enumValues: null | number;
  fields: Array<DocsFields>;
  inputFields: null;
  interfaces: Array<number>;
  kind: string;
  name: string;
  possibleTypes: null | string;
}

interface DocsFields {
  name: string;
  args: Array<DocsArgs>;
  type: ofType;
  description: null | string;
}

interface DocsArgs {
  name: string;
  type: DocsType;
  defaultValue: null | string;
}

interface DocsType {
  kind: string;
  name: string | null;
  ofType: ofType;
}

export const DocsQueries = (props: DocsProps) => {
  const { queries } = props;
  console.log(queries);
  console.log(1);

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
