const {Command} = require('commander');

function getParams() {
  const program = new Command();

  program.version('0.0.1');
  program
    .option('-s, --shift <count>', 'a shift')
    .option('-a, --action <type>', 'an action encode/decode')
    .option('-i, --input <filename>', 'an input file')
    .option('-o, --output <filename>', 'an output file');

  program.parse(process.argv);

  return program.opts();
}

module.exports = {
  getParams
};
