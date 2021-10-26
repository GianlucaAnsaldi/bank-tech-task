class AccountHistory {
  constructor() {
    this.transactions = [];
  }

  addDeposit(amt, currentBalance) {
    this.transactions.push(['deposit', parseInt(`${amt}`), currentBalance]);
  }

  addWithdrawal(amt, currentBalance) {
    this.transactions.push(['withdrawal', parseInt(`${amt}`), currentBalance]);
  }
}

module.exports = AccountHistory;
