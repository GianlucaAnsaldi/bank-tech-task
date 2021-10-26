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

  describe('Printing statement', () => {
    console.log = jest.fn();

    afterEach(() => {
      console.log.mockRestore();
    });

    test('can print the header of the statement', () => {
      bankAccount.printHeader();
      expect(console.log).toHaveBeenCalledWith(
        'date || credit || debit || balance'
      );
    });

    test('can print the body of the statement', () => {
      bankAccount.deposit(10);
      bankAccount.printBody();
      expect(console.log).toHaveBeenCalledWith('date || 10 || || 10');
    });

    test('can print the full statement', () => {
      bankAccount.deposit(10);
      bankAccount.withdraw(3);
      bankAccount.printStatement();
      expect(console.log).toHaveBeenNthCalledWith(
        1,
        'date || credit || debit || balance'
      );
      expect(console.log).toHaveBeenNthCalledWith(2, 'date || || 3 || 7');
      expect(console.log).toHaveBeenNthCalledWith(3, 'date || 10 || || 10');
    });
  });
});
