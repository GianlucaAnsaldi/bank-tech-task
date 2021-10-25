const BankAccount = require('../src/bankAccount');

describe('BankAccount', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  test('a new bank account to be an instance of Bank Account', () => {
    expect(bankAccount).toBeInstanceOf(BankAccount);
  });

  test('a new bank account should have balance of 0', () => {
    expect(bankAccount.balance).toBe(0);
  });
});
