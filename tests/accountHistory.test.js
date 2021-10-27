const AccountHistory = require('../src/accountHistory');

describe('AccountHistory', () => {
  let accountHistory;

  beforeEach(() => {
    accountHistory = new AccountHistory();
  });

  test('it is instantiated as an empty array', () => {
    expect(accountHistory._getTransactions()).toEqual([]);
  });

  test('deposit is stored into the history arrray', () => {
    accountHistory._addDeposit(new Date('27-10-2021'), 10, 10);
    expect(accountHistory.transactionList[0]).toContain('deposit');
    expect(accountHistory.transactionList[0]).toContain(10);
  });

  test('withdrawl is stored into the history arrray', () => {
    accountHistory._addDeposit(new Date('27-10-2021'), 10, 10);
    accountHistory._addWithdrawal(new Date('27-10-2021'), 3, 7);
    expect(accountHistory.transactionList[1]).toContain('withdrawal');
    expect(accountHistory.transactionList[1]).toContain(3);
    expect(accountHistory.transactionList[1]).toContain(7);
  });
});
