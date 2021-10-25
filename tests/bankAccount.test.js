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

  test('can see the balance on the account', () => {
    expect(bankAccount.showBalance()).toBe(0);
  });

  test('can deposit money on the account', () => {
    bankAccount.deposit(10);
    expect(bankAccount.balance).toBe(10);
  });

  test('can withdraw money from the account', () => {
    bankAccount.deposit(10);
    bankAccount.withdraw(5);
    expect(bankAccount.balance).toBe(5);
  });
});
