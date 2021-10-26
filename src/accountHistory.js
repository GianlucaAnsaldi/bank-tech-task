class AccountHistory {
  constructor() {
    this.transactionList = [];
  }

  getTransactions() {
    return this.transactionList;
  }

  addDeposit(amt, currentBalance) {
    this.transactionList.push(['deposit', parseInt(`${amt}`), currentBalance]);
  }

  addWithdrawal(amt, currentBalance) {
    this.transactionList.push([
      'withdrawal',
      parseInt(`${amt}`),
      currentBalance,
    ]);
  }
}

module.exports = AccountHistory;
