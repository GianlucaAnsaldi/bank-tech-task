const BankAccount = require('../src/bankAccount');
// import BankAccount from '../src/bankAccount.js';

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

  test('deposit is stored into the history arrray', () => {
    bankAccount.deposit(10);
    expect(bankAccount.history[0]).toContain('deposit');
    expect(bankAccount.history[0]).toContain(10);
  });

  test('can withdraw money from the account', () => {
    bankAccount.deposit(10);
    bankAccount.withdraw(5);
    expect(bankAccount.balance).toBe(5);
  });

  test('can print the header of the statement', () => {
    expect(bankAccount.printHeader()).toEqual(
      'date || credit || debit || balance'
    );
  });
});
