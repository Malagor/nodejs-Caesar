const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ALPHABET_CAPITAL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ALPHABET_LENGTH = ALPHABET.length;

function enigma(action, shift, text) {
  let locShift = 0;

  if (action === 'encode') {
    locShift = shift < 0 ? ALPHABET_LENGTH + +shift : shift;
  }

  if (action === 'decode') {
    locShift = shift < 0 ? -shift: ALPHABET_LENGTH - +shift  ;
  }

  const original = text.split('');
  const regex = new RegExp(/[a-z]/);
  const regexCapital = new RegExp(/[A-Z]/);

  const encodeStr = original.map(char => {
    if (!regex.test(char) && !regexCapital.test(char)) {
      return char;
    }

    const alphabet = regex.test(char) ? ALPHABET : ALPHABET_CAPITAL;

    const index = alphabet.findIndex(c => c === char) + +locShift;
    const newIndex = index % ALPHABET_LENGTH;
    return alphabet[newIndex];
  });

  return encodeStr.join('');
}

module.exports = {
  enigma
};
