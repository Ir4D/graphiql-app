import React, { useState, useEffect } from 'react';
import { useQueryContext } from '../../utils/QueryContext/QueryContext';
import parseHeaders from '../../utils/helpers/ParseHeaders';

const Query = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { query, apiUrl, variables, headers } = useQueryContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedVariables = variables ? JSON.parse(variables) : null;
        const headersObject = headers ? parseHeaders(headers) : {};
        if (!headersObject['Content-Type']) {
          headersObject['Content-Type'] = 'application/json';
        }
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: headersObject,
          body: JSON.stringify({ query, variables: parsedVariables }),
        });

        console.log('Headers:', headersObject);
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error('GraphQL request error:', error);
      }
    };

    fetchData();
  }, [apiUrl, headers, query, variables]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Query;
