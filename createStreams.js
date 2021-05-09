const fs = require('fs');

function createStreams(input, output) {
  // input Stream
  const inputStream = input
    ? fs.createReadStream(input)
    : process.stdin;

  inputStream.on('error', (err) => errorHandler(err, input));

  // output Stream
  let outputStream;
  if (output) {
    const hasFile = checkFileExistsSync(output);

    if (hasFile) {
      outputStream = fs.createWriteStream(output, {flags: 'a'});
    } else {
      errorHandler(null, output);
    }
  } else {
    outputStream = process.stdout;
  }

  return {inputStream, outputStream};
}

function checkFileExistsSync(filepath) {
  let flag = true;
  try {
    fs.accessSync(filepath, fs.constants.F_OK);
  } catch (err) {
    flag = false;
  }
  return flag;
}

function errorHandler(err, filename) {
  process.stderr.write(`There are problems accessing the file: "${filename}".`);
  process.exit(-1);
}

module.exports = {
  createStreams
};
