const AccountHistory = require('../src/accountHistory');

describe('AccountHistory', () => {
  let accountHistory;

  beforeEach(() => {
    accountHistory = new AccountHistory();
  });

  test('it is instantiated as an empty array', () => {
    expect(accountHistory.getTransactions()).toEqual([]);
  });

  test('deposit is stored into the history arrray', () => {
    accountHistory.addDeposit(10, 10);
    expect(accountHistory.transactionList[0]).toContain('deposit');
    expect(accountHistory.transactionList[0]).toContain(10);
  });

  test('withdrawl is stored into the history arrray', () => {
    accountHistory.addDeposit(10, 10);
    accountHistory.addWithdrawal(3, 7);
    expect(accountHistory.transactionList[1]).toContain('withdrawal');
    expect(accountHistory.transactionList[1]).toContain(3);
    expect(accountHistory.transactionList[1]).toContain(7);
  });
});
