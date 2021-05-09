const {getParams} = require('./getParams');
const {checkParams} = require('./checkParams');
const {createStreams} = require('./createStreams');
const {transformData} = require('./transformData');

function caesar() {
  const {shift, action, output, input} = getParams();

  if (!checkParams(shift, action)) {
    process.stderr.write('Missing or incorrect parameters --shift or --action');
    process.exit(-1);
  }

  const {inputStream, outputStream} = createStreams(input, output);
  const transformStream = transformData(action, shift);

  inputStream
    .pipe(transformStream)
    .pipe(outputStream);
}

caesar();
