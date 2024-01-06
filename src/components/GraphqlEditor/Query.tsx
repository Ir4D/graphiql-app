import React, { useState, useEffect } from 'react';
import { useQueryContext } from '../../utils/QueryContext/QueryContext';
import parseHeaders from '../../utils/helpers/ParseHeaders';
import Toast from '../../components/Toast/Toast';

const Query = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const { query, apiUrl, variables, headers } = useQueryContext();

  useEffect(() => {
    const fetchData = async () => {
      let errorMsg = 'Shomethig is wrong with this query. Try something else';
      try {
        let parsedVariables;
        if (variables) {
          try {
            parsedVariables = JSON.parse(variables);
          } catch (parseError) {
            errorMsg = 'Variables are in wrong format';
          }
        }
        const headersObject = headers ? parseHeaders(headers) : {};
        if (!headersObject['Content-Type']) {
          headersObject['Content-Type'] = 'application/json';
        }
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: headersObject,
          body: JSON.stringify({ query, variables: parsedVariables }),
        });

        const result = await response.json();
        setData(result);
        setLoading(false);

        if (!response.ok) {
          throw new Error(errorMsg);
        }
      } catch (error) {
        if (
          (error instanceof SyntaxError &&
            error.message === 'Unexpected end of JSON input') ||
          (error instanceof TypeError && error.message === 'Failed to fetch')
        ) {
          return;
        } else if (error instanceof SyntaxError || error instanceof TypeError) {
          setError(errorMsg);
        } else {
          setError((error as Error).message);
        }
        setShowToast(true);
      }
    };

    fetchData();
  }, [apiUrl, headers, query, variables]);

  const handleHideToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error && showToast && (
            <Toast message={`Error: ${error}`} onClose={handleHideToast} />
          )}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default Query;
