const {describe, expect} = require("@jest/globals");

const {createStreams} = require('../createStreams');

describe('Check createStreams', () => {
  test('Create input stream from exist file', () => {
    const {inputStream} = createStreams('input.txt');
    expect(inputStream.path).toBe('input.txt');
  });

  test('Create output stream from exist file', () => {
    const {outputStream} = createStreams('', 'output.txt');
    expect(outputStream.path).toBe('output.txt');
  })
});
