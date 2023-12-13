import React, { useEffect } from 'react';

interface CharacterData {
  id: string;
  name: string;
}

interface QueryProps {
  onDataFetched: (data: CharacterData) => void;
}

const Query: React.FC<QueryProps> = ({ onDataFetched }) => {
  const apiUrl = 'https://rickandmortyapi.com/graphql';

  useEffect(() => {
    const fetchData = async () => {
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

      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          onDataFetched(data.data);
        });
    };

    fetchData();
  }, []);

  return <div>Loading...</div>;
};

export default Query;
