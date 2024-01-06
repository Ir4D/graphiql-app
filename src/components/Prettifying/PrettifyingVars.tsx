const PrettifyVars = (initialArray: RegExpMatchArray | null) => {
  const res = [];

  for (let i = 0; i < initialArray!.length; i++) {
    const char = initialArray![i];
    const nextChar = initialArray![i + 1];

    if (char === '{') {
      res.push(char, '\n', '  ');
    } else if (char === ':') {
      res.push(char, ' ');
    } else if (char === ',') {
      if (nextChar === '}') {
        res.push(char, '\n');
      } else {
        res.push(char, '\n', '  ');
      }
    } else if (nextChar === '}') {
      res.push(char, '\n');
    } else {
      res.push(char);
    }
  }

  return res.join('');
};

export default PrettifyVars;
