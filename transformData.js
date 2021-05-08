const { Transform } = require('stream');
const {enigma} = require('./enigma');

function transformData(action, shift) {

  const encode = enigma.bind(null, action, shift);

  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(encode(chunk.toString()));
      callback();
    }
  });
}

module.exports = {
  transformData
};
