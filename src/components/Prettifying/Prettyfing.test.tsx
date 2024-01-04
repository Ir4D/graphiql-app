import Prettify from './Prettyfing';

describe('Prettify', () => {
  it('should prettify the input string correctly', () => {
    const inputString = 'const foo={bar:(baz  :qux  ,quux  :  quuz  )}';
    const expectedOutputPattern =
      /^const foo\s*=\s*{\s*bar:\s*\(\s*baz:\s*qux,\s*quux:\s*quuz\s*\)\s*}/;
    const result = Prettify(inputString);
    expect(result).toMatch(expectedOutputPattern);
  });

  it('should handle nested curly parentheses and maintain correct indentation', () => {
    const inputString = 'const foo={bar:{baz:{qux:quux}}}';
    const expectedOutputPattern =
      /^const foo\s*=\s*{\s*bar:\s*{\s*baz:\s*{\s*qux:\s*quux\s*}\s*}\s*}/;
    const result = Prettify(inputString);
    expect(result).toMatch(expectedOutputPattern);
  });
});
