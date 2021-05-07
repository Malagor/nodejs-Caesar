const {enigma} = require('./enigma');

function transformData(action, shift, inputStream, outputStream, errorStream) {
    inputStream.on('readable', () => {
      const buffer = inputStream.read();
      if (buffer && buffer.includes('\n')) {
        const encode = enigma(action, shift, buffer.toString());
        outputStream.write(encode);
      }
    });

    inputStream.on('end', () => {
      console.log(`Data ${action}`);
    });

    inputStream.on('error', (err) => {
      if (err.code === 'ENOENT') {
        errorStream.write('File not found');
      } else {
        errorStream.write(err.toString());
      }
      process.exit(-1);
    });
}

module.exports = {
  transformData
};
