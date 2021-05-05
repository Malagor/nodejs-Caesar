const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ALPHABET_CAPITAL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ALPHABET_LENGTH = ALPHABET.length;

function enigma(action, shift, text) {
  if (typeof text !== 'string') {
    throw new Error('Data is not a string');
  }

  if (isNaN(+shift)) {
    throw new Error('Shift is not a number');
  }

  if (action !== 'encode' && action !== 'decode') {
    throw new Error('Action must be encode/decode');
  }

  const regexSmallChars = new RegExp(/[a-z]/);
  const regexLatinChars = new RegExp(/[A-Za-z]/);

  let locShift = 0;

  if (action === 'encode') {
    locShift = shift < 0 ? ALPHABET_LENGTH + +shift : shift;
  } else {
    locShift = shift < 0 ? -shift : ALPHABET_LENGTH - +shift;
  }

  return text
    .split('')
    .map(char => {
      if (!regexLatinChars.test(char)) {
        return char;
      }

      const alphabet = regexSmallChars.test(char) ? ALPHABET : ALPHABET_CAPITAL;

      const newIndex = (alphabet.findIndex(c => c === char) + +locShift) % ALPHABET_LENGTH;

      return alphabet[newIndex];
    })
    .join('');
}

module.exports = {
  enigma
};
