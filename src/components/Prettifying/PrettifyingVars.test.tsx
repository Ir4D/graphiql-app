import PrettifyVars from './PrettifyingVars';

describe('PrettifyVars', () => {
  it('should prettify the input array correctly', () => {
    const inputString = 'const foo = { bar: baz }';
    const inputArray = inputString.match(/./g);
    const expectedOutput = 'const foo = {\n  bar: baz\n}';
    const result = PrettifyVars(inputArray);
    expect(result.replace(/\s/g, '')).toEqual(
      expectedOutput.replace(/\s/g, '')
    );
  });

  it('should handle nested curly brackets and maintain correct indentation', () => {
    const inputString = 'const foo = { bar: { baz: qux } }';
    const inputArray = inputString.match(/./g);
    const expectedOutput = 'const foo = {\n  bar: {\n    baz: qux\n  }\n}';
    const result = PrettifyVars(inputArray);
    expect(result.replace(/\s/g, '')).toEqual(
      expectedOutput.replace(/\s/g, '')
    );
  });

  it('should handle commas and maintain correct indentation', () => {
    const inputString = 'const foo = { bar: baz, qux: quux }';
    const inputArray = inputString.match(/./g);
    const expectedOutput = 'const foo = {\n  bar: baz,\n  qux: quux\n}';
    const result = PrettifyVars(inputArray);
    expect(result.replace(/\s/g, '')).toEqual(
      expectedOutput.replace(/\s/g, '')
    );
  });

  it('should handle complex input arrays', () => {
    const inputString = 'const foo = { bar: { baz: qux }, quux: 42 }';
    const inputArray = inputString.match(/./g);
    const expectedOutput =
      'const foo = {\n  bar: {\n    baz: qux\n  },\n  quux: 42\n}';
    const result = PrettifyVars(inputArray);
    expect(result.replace(/\s/g, '')).toEqual(
      expectedOutput.replace(/\s/g, '')
    );
  });
});
