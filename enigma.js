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

  return text
    .split('')
    .map(char => {
      if (!regexLatinChars.test(char)) {
        return char;
      }

      const alphabet = regexSmallChars.test(char) ? ALPHABET : ALPHABET_CAPITAL;

      const charIndex = alphabet.findIndex(c => c === char);

      const newIndex = findNewIndex(charIndex, shift, action);

      return alphabet[newIndex];
    })
    .join('');
}

function findNewIndex(charIndex, shift, action, length = ALPHABET_LENGTH) {
  const locShift = action === 'encode' ? +shift : -shift;
  const calculateIndex = (charIndex + locShift) % length;
  return calculateIndex < 0 ? length + calculateIndex : calculateIndex;
}

module.exports = {
  enigma
};
