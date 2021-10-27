class AccountHistory {
  constructor() {
    this.transactionList = [];
  }

  _getTransactions() {
    return this.transactionList;
  }

  _addDeposit(date, amt, currentBalance) {
    let transactionDate = this._formattingDate(date);
    this.transactionList.push([
      transactionDate,
      'deposit',
      parseInt(`${amt}`),
      currentBalance,
    ]);
  }

  _addWithdrawal(date, amt, currentBalance) {
    let transactionDate = this._formattingDate(date);
    this.transactionList.push([
      transactionDate,
      'withdrawal',
      parseInt(`${amt}`),
      currentBalance,
    ]);
  }

  _formattingDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}/${month.toString().padStart(2, '0')}/${year}`;
  }
}

module.exports = AccountHistory;
