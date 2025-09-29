const addNumbers = require('./addnumber')

describe('addnumbers', () => {
  test('adds the numbers together', () => {
    expect(addNumbers()).toEqual(2);
  });
});