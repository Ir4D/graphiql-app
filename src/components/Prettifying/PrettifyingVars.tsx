const PrettifyVars = (initialArray: RegExpMatchArray | null) => {
  const res = [];

  for (let i = 0; i < initialArray!.length; i++) {
    const char = initialArray![i];
    const nextChar = initialArray![i + 1];
    // const prevChar = initialArray![i - 1];

    // {"gender": "male", "name": "Rick Sanchez"}
    // ['{', '"gender"', ':', '"male"', ',', '"name"', ':', '"Rick Sanchez"', '}']
    // {
    //   "gender": "male",
    //   "name": "Rick Sanchez"
    // }

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

  //   if (
  //     char.match(/[a-zA-Z]/) &&
  //     nextChar.match(/[a-zA-Z]/) &&
  //   ) {
  //     res.push(char, ' ');
  //   } else if ((char === ':' || char === ',') && insideParentheses) {
  //     if (nextChar !== '{') {
  //       res.push(char, ' ');
  //     } else {
  //       res.push(char);
  //     }
  //   } else if (char === '{') {
  //     if (!insideParentheses) {
  //       level++;
  //       insideCurlyParentheses = true;
  //       if (i !== 0 && prevChar !== ':') {
  //         res.push(' ');
  //       }
  //       res.push(char, '\n', '  '.repeat(level));
  //     } else {
  //       res.push(' ', char);
  //     }
  //   } else if (char === '}' && !insideParentheses) {
  //     level--;
  //     insideCurlyParentheses = false;
  //     res.push('\n', '  '.repeat(level), char);
  //   } else if (insideCurlyParentheses && char.match(/[a-zA-Z]/)) {
  //     if (nextChar.match(/[a-zA-Z]/)) {
  //       res.push(char, '\n', '  '.repeat(level));
  //     } else {
  //       res.push(char);
  //     }
  //   } else {
  //     res.push(char);
  //   }
  // }

  return res.join('');
};

export default PrettifyVars;
