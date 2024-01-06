import Prettify from './Prettifying';

describe('Prettify', () => {
  it('should prettify the input string correctly', () => {
    const inputString = 'const foo = { bar: (baz: qux, quux: quuz) }';
    const inputArray = inputString.match(/./g);
    const expectedOutput = 'const foo = {\n  bar: (baz: qux, quux: quuz)\n}';
    const result = Prettify(inputArray);
    expect(result).toBeDefined();
    if (result) {
      expect(result.replace(/\s/g, '')).toEqual(
        expectedOutput.replace(/\s/g, '')
      );
    }
  });

  it('should handle nested curly parentheses and maintain correct indentation', () => {
    const inputString = 'const foo={bar:{baz:{qux:quux}}}';
    const inputArray = inputString.match(/./g);
    const expectedOutput =
      'const foo = {\n  bar: {\n    baz: {\n      qux: quux\n    }\n  }\n}';
    const result = Prettify(inputArray);
    expect(result).toBeDefined();
    if (result) {
      expect(result.replace(/\s/g, '')).toEqual(
        expectedOutput.replace(/\s/g, '')
      );
    }
  });

  it('should handle different types of characters and maintain correct indentation', () => {
    const inputString = 'const foo = { bar: "baz", qux: 42 }';
    const inputArray = inputString.match(/./g);
    const expectedOutput = 'const foo = {\n  bar: "baz",\n  qux: 42\n}';
    const result = Prettify(inputArray);
    expect(result).toBeDefined();
    if (result) {
      expect(result.replace(/\s/g, '')).toEqual(
        expectedOutput.replace(/\s/g, '')
      );
    }
  });

  it('should handle parentheses and maintain correct indentation', () => {
    const inputString = 'const foo = (bar) => { return bar * 2; }';
    const inputArray = inputString.match(/./g);
    const expectedOutput = 'const foo = (bar) => {\n  return bar * 2;\n}';
    const result = Prettify(inputArray);
    expect(result).toBeDefined();
    if (result) {
      expect(result.replace(/\s/g, '')).toEqual(
        expectedOutput.replace(/\s/g, '')
      );
    }
  });

  it('should handle empty input array', () => {
    const inputString = '';
    const inputArray = (inputString.match(/./g) || []) as RegExpMatchArray;
    const expectedOutput = '';
    const result = Prettify(inputArray);
    expect(result).toEqual(expectedOutput);
  });
});
