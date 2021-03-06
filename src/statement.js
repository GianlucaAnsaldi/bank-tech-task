class Statement {
  _printStatement(transactions) {
    this._printHeader();
    this._printBody(transactions);
  }

  _printHeader() {
    console.log('date || credit || debit || balance');
  }

  _printBody(transactions) {
    transactions.reverse().map((transaction) => {
      console.log(this._formatTransactions(transaction));
    });
  }

  _formatTransactions(transaction) {
    if (transaction[1] == 'deposit') {
      return `${transaction[0]} || ${transaction[2].toFixed(
        2
      )} || || ${transaction[3].toFixed(2)}`;
    }
    if (transaction[1] == 'withdrawal') {
      return `${transaction[0]} || || ${transaction[2].toFixed(
        2
      )} || ${transaction[3].toFixed(2)}`;
    }
  }
}

module.exports = Statement;
