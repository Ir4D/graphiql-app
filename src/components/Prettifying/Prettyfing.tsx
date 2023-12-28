const Prettify = (inputString: string) => {
  const initialArray = inputString.match(/[a-zA-Z]+|[^\s\w]/g);
  let level = 0;
  let insideParentheses = false;
  let insideCurlyParentheses = false;
  const res = [];

  for (let i = 0; i < initialArray!.length; i++) {
    const char = initialArray![i];
    const nextChar = initialArray![i + 1];

    if (char === '(') {
      insideParentheses = true;
    } else if (char === ')') {
      insideParentheses = false;
    }

    if (
      char.match(/[a-zA-Z]/) &&
      nextChar.match(/[a-zA-Z]/) &&
      !insideCurlyParentheses
    ) {
      res.push(char, ' ');
    } else if (char === '{') {
      if (!insideParentheses) {
        level++;
        insideCurlyParentheses = true;
        i === 0
          ? res.push(char, '\n', '  '.repeat(level))
          : res.push(' ', char, '\n', '  '.repeat(level));
      } else {
        res.push(' ', char);
      }
    } else if (char === '}' && !insideParentheses) {
      level--;
      insideCurlyParentheses = false;
      res.push('\n', '  '.repeat(level), char);
    } else if (insideCurlyParentheses && char.match(/[a-zA-Z]/)) {
      if (nextChar.match(/[a-zA-Z]/)) {
        res.push(char, '\n', '  '.repeat(level));
      } else {
        res.push(char);
      }
    } else {
      res.push(char);
    }
  }

  return res.join('');
};

export default Prettify;
