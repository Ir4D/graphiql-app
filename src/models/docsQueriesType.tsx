import { ofType } from './docsType';

export interface DocsProps {
  queries: DocsQueriesType;
}

export interface DocsQueriesType {
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
