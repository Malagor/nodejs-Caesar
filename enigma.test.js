const {enigma} = require('./enigma');

const original = 'This is secret. Message about "_" symbol!';
const encode7 = 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';
const encode_1 = 'Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!';
const nonlatin = 'Это секретный секрет, который не должен зашифроваться.';
const mixcontent = 'This is secret. А это не латиница. Message about "_123" symbol!';
const mixcontent7 = 'Aopz pz zljyla. А это не латиница. Tlzzhnl hivba "_123" zftivs!';

test('encode +7', () => {
  expect(enigma('encode', '7', original)).toBe(encode7);
});

test('decode +7', () => {
  expect(enigma('decode', '7', encode7)).toBe(original);
});

test('encode -1', () => {
  expect(enigma('encode', '-1', original)).toBe(encode_1);
});

test('decode -1', () => {
  expect(enigma('decode', '-1', encode_1)).toBe(original);
});

test('non latin chars', () => {
  expect(enigma('encode', '7', nonlatin)).toBe(nonlatin);
});

test('mix latin, non latin and number', () => {
  expect(enigma('encode', '7', mixcontent)).toBe(mixcontent7);
});
