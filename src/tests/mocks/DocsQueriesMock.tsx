import { DocsProps } from '../../models/docsQueriesType';

const mockProps: DocsProps = {
  queries: {
    fields: [
      {
        name: 'exampleQuery',
        args: [
          {
            name: 'arg1',
            type: {
              name: 'string',
              kind: 'ScalarType',
              ofType: {
                name: 'String',
                kind: 'ScalarType',
                ofType: null,
              },
            },
            defaultValue: 'default',
          },
          {
            name: 'arg2',
            type: {
              name: 'number',
              kind: 'ScalarType',
              ofType: {
                name: 'Int',
                kind: 'ScalarType',
                ofType: null,
              },
            },
            defaultValue: '42',
          },
        ],
        type: {
          name: 'ReturnType',
          kind: 'ObjectType',
          ofType: { name: 'CustomType', kind: 'ObjectType', ofType: null },
        },
        description: 'Example query description',
      },
    ],
    description: '',
    enumValues: null,
    inputFields: null,
    interfaces: [],
    kind: '',
    name: '',
    possibleTypes: null,
  },
  style: {
    docs_queries: 'mocked-docs-queries-style',
    docs_query: 'mocked-docs-query-style',
    docs_args: 'mocked-docs-args-style',
    docs_defaultValue: 'mocked-docs-defaultValue-style',
  },
};
export default mockProps;
