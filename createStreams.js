const fs = require('fs');

function createStreams(input, output) {
  // input Stream
  // const inputStream = input
  //   ? fs.createReadStream(input)
  //   : process.stdin;

  let inputStream;
  if (input) {
    const hasFile = checkFileExistsSync(input, fs.constants.F_OK | fs.constants.R_OK);

    if (hasFile) {
      inputStream = fs.createReadStream(input);
    } else {
      errorHandler(null, input);
    }
  } else {
    inputStream = process.stdin;
  }

  inputStream.on('error', (err) => errorHandler(err, input));

  // output Stream
  let outputStream;
  if (output) {
    const hasFile = checkFileExistsSync(output, fs.constants.F_OK | fs.constants.W_OK);

    if (hasFile) {
      outputStream = fs.createWriteStream(output, {flags: 'a'});
    } else {
      errorHandler(null, output);
    }
  } else {
    outputStream = process.stdout;
  }

  outputStream.on('error', (err) => errorHandler(err, output));

  return {inputStream, outputStream};
}

function checkFileExistsSync(filepath, mode) {
  let flag = true;
  try {
    fs.accessSync(filepath, mode);
    // fs.accessSync(filepath, fs.constants.F_OK);
  } catch (err) {
    flag = false;
  }
  return flag;
}

function errorHandler(err, filename) {
  process.stderr.write(`There are problems accessing the file: "${filename}".`);
  if (err) {
    process.stderr.write(`\n${err}`);
  }
  process.exit(-1);
}

module.exports = {
  createStreams
};
