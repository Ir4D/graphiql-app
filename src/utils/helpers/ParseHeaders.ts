const parseHeaders = (headersString: string): Record<string, string> => {
  const headers: Record<string, string> = {};
  if (!headersString) {
    return headers;
  }

  const headerLines = headersString.split('\n');

  headerLines.forEach((line) => {
    const [key, value] = line.split(':');
    if (key && value) {
      headers[key.trim()] = value.trim();
    }
  });

  return headers;
};

export default parseHeaders;
