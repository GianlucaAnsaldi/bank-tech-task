const bankAccount = require('../src/bankAccount');

test('a new bank account to be an instance of Bank Account', () => {
  expect(new bankAccount()).toBeInstanceOf(bankAccount);
});
