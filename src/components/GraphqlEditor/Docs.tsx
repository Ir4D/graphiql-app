import React, { useState, useEffect } from 'react';
import { useQueryContext } from '../../utils/QueryContext/QueryContext';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql';

function Docs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { query, apiUrl } = useQueryContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: getIntrospectionQuery() }),
        });

        const result = await response.json();
        setData(result.data);
        setLoading(false);
        console.log(result.data);
      } catch (error) {
        console.error('GraphQL request error:', error);
      }
    };

    fetchData();
  }, [apiUrl, query]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default Docs;
