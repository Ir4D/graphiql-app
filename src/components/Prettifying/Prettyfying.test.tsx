import Prettify from './Prettyfying';

describe('Prettify', () => {
  it('should prettify the input string correctly', () => {
    const inputString = 'const foo = { bar: (baz: qux, quux: quuz) }';
    const inputArray = inputString.match(/./g);
    const expectedOutput = 'const foo = {\n  bar: (baz: qux, quux: quuz)\n}';
    const result = Prettify(inputArray);
    expect(result.replace(/\s/g, '')).toEqual(
      expectedOutput.replace(/\s/g, '')
    );
  });

  it('should handle nested curly parentheses and maintain correct indentation', () => {
    const inputString = 'const foo={bar:{baz:{qux:quux}}}';
    const inputArray = inputString.match(/./g);
    const expectedOutput =
      'const foo = {\n  bar: {\n    baz: {\n      qux: quux\n    }\n  }\n}';
    const result = Prettify(inputArray);
    expect(result.replace(/\s/g, '')).toEqual(
      expectedOutput.replace(/\s/g, '')
    );
  });
});
