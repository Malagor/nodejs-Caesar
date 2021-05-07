const {checkParams} = require('./checkParams');

const shiftIsNumber = 10;
const shiftIsNegativeNumber = -10;
const shiftIsString = '10';
const shiftIsIncorrectString = 'blablabla';
const shiftIsBoolean = true;
const shiftIsObject = {count: 5};
const shiftIsArray = [7];

const actionIsNumber = 10;
const actionIsString = 'blablabla';
const actionIsBoolean = true;
const actionIsEncode = 'encode';
const actionIsDecode = 'decode';
const actionIsArray = ['decode'];
const actionIsObject = {action: 'decode'};



describe('Check Shift', () => {
  test('shiftIsNumber', () => expect(checkParams(shiftIsNumber, actionIsEncode)).toBe(true));

  test('shiftIsNegativeNumber', () => expect(checkParams(shiftIsNegativeNumber, 'encode', actionIsEncode)).toBe(true));

  test('shiftIsString', () => expect(checkParams(shiftIsString, actionIsEncode)).toBe(true));

  test('shiftIsIncorrectString', () => expect(checkParams(shiftIsIncorrectString, actionIsEncode)).toBe(false));

  test('shiftIsBoolean', () => expect(checkParams(shiftIsBoolean, actionIsEncode)).toBe(false));

  test('shiftIsObject', () => expect(checkParams(shiftIsObject, actionIsEncode)).toBe(false));

  test('shiftIsArray', () => expect(checkParams(shiftIsArray, actionIsEncode)).toBe(false));
});


describe('Check Action', () => {
  test('actionIsNumber', () => expect(checkParams(shiftIsString, actionIsNumber)).toBe(false));

  test('actionIsString', () => expect(checkParams(shiftIsString, actionIsString)).toBe(false));

  test('actionIsBoolean', () => expect(checkParams(shiftIsString, actionIsBoolean)).toBe(false));

  test('actionIsEncode', () => expect(checkParams(shiftIsString, actionIsEncode)).toBe(true));

  test('actionIsDecode', () => expect(checkParams(shiftIsString, actionIsDecode)).toBe(true));

  test('actionIsArray', () => expect(checkParams(shiftIsString, actionIsArray)).toBe(false));

  test('actionIsObject', () => expect(checkParams(shiftIsString, actionIsObject)).toBe(false));

});
