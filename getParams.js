const {Command, Option, InvalidOptionArgumentError} = require('commander');

function checkShift(value) {
  if (isNaN(+value)) {
    throw new InvalidOptionArgumentError('Shift value must be a number.');
  }
  return +value;
}

function getParams() {
  const program = new Command();

  program.version('0.0.1');
  program
    .addHelpText('before', 'This utility will encode or decode your input using Caesar ciphering algorithm')
    .addOption(new Option('-a, --action <encode|decode>', 'an action encode/decode')
      .choices(['encode', 'decode'])
      .makeOptionMandatory(true)
    )
    .addOption(new Option('-s, --shift <number>', 'A shift of the Caesar cipher')
      .makeOptionMandatory(true)
      .argParser(checkShift)
    )
    .option('-i, --input <filename>', 'an input file')
    .option('-o, --output <filename>', 'an output file')
    .addHelpText('afterAll', '\nCreated by Aleksandr Pisarik (Malagor) for NodeJs course 2021/Q2 at RS-School');

  program.parse(process.argv);

  return program.opts();
}

module.exports = {
  getParams
};
