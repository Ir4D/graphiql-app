import React, { useState, useEffect } from 'react';

const Query = () => {
  const apiUrl = 'https://rickandmortyapi.com/graphql';
  const query = `
    query {
      characters {
        results {
          id
          name
        }
      }
    }
  `;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        setData(result.data);
        setLoading(false);
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
};

export default Query;
