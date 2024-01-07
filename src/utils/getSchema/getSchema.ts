import { getIntrospectionQuery } from 'graphql';

const requestSchema = async (
  url: string,
  handleError: (error: Error) => void
) => {
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
    if (
      (error instanceof SyntaxError &&
        error.message === 'Unexpected end of JSON input') ||
      (error instanceof TypeError && error.message === 'Failed to fetch')
    ) {
      handleError(error);
    }
  }
};

export default requestSchema;
