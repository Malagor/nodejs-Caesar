const {enigma} = require('./enigma');

const original = 'This is secret. Message about "_" symbol!';
const encode7 = 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';
const encode_1 = 'Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!';

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
