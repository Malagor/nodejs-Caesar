const ACTION_TYPE = ['encode', 'decode'];

function checkParams(shift, action) {

  let isParamsCorrect = true;
  if (!shift
    || (typeof shift !== "string" && typeof shift !== 'number')
    || isNaN(+shift)) {
    process.stderr.write('-s, --shift it is required parameter and must to be number');
    isParamsCorrect = isParamsCorrect && false;
  }

  if (!ACTION_TYPE.includes(action)) {
    process.stderr.write('-a, --action is required and must by encode/decode');
    isParamsCorrect = isParamsCorrect && false;
  }

  return isParamsCorrect;
}

module.exports ={
  checkParams
};
