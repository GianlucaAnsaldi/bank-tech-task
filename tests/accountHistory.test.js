const AccountHistory = require('../src/accountHistory');

describe('AccountHistory', () => {
  let accountHistory;

  beforeEach(() => {
    accountHistory = new AccountHistory();
  });

  test('it is instantiated as an empty array', () => {
    expect(accountHistory.transactions).toEqual([]);
  });
});
