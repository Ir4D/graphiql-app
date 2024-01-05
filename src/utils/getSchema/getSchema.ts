import { getIntrospectionQuery } from 'graphql';

const requestSchema = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
      }),
    });
    const result = await res.json();
    const schema = result.data.__schema;
    return schema;
  } catch (error) {
    console.error('GraphQL schema request error:', error);
    if (error instanceof Error) alert(error);
  }
};

export default requestSchema;
