import {
  IntrospectionField,
  IntrospectionType,
} from 'graphql/utilities/getIntrospectionQuery';

export const mockFields: ReadonlyArray<IntrospectionField> = [
  {
    name: 'field1',
    args: [],
    type: { name: 'String', kind: 'SCALAR' },
    isDeprecated: false,
    deprecationReason: null,
  },
  {
    name: 'field2',
    args: [],
    type: { name: 'Int', kind: 'SCALAR' },
    isDeprecated: false,
    deprecationReason: null,
  },
];

export const transformFieldsToTypes = (
  fields: ReadonlyArray<IntrospectionField>
): IntrospectionType[] => {
  return fields.map((field) => ({
    name: field.name,
    kind: 'OBJECT',
    description: '',
    fields: [field],
    interfaces: [],
  }));
};
