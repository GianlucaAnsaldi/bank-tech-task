const AccountHistory = require('../src/accountHistory');

describe('AccountHistory', () => {
  let accountHistory;

  beforeEach(() => {
    accountHistory = new AccountHistory();
  });

  test('it is instantiated as an empty array', () => {
    expect(accountHistory.transactions).toEqual([]);
  });

  test('deposit is stored into the history arrray', () => {
    accountHistory.addDeposit(10, 10);
    expect(accountHistory.transactions[0]).toContain('deposit');
    expect(accountHistory.transactions[0]).toContain(10);
  });

  test('withdrawl is stored into the history arrray', () => {
    accountHistory.addDeposit(10, 10);
    accountHistory.addWithdrawal(3, 7);
    expect(accountHistory.transactions[1]).toContain('withdrawal');
    expect(accountHistory.transactions[1]).toContain(3);
    expect(accountHistory.transactions[1]).toContain(7);
  });
});
