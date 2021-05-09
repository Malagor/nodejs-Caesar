const {pipeline} = require('stream');
const {getParams} = require('./getParams');
const {createStreams} = require('./createStreams');
const {transformData} = require('./transformData');

function caesar() {
  const {shift, action, output, input} = getParams();
  const {inputStream, outputStream} = createStreams(input, output);
  const transformStream = transformData(action, shift);

  pipeline(
    inputStream,
    transformStream,
    outputStream,
    (err) => {
      if (err) {
        process.stderr.write(`Process "${action}" failed.`, err);
        process.exit(-1);
      }

    }
  )
}

caesar();
