// const AccountHistory = require('./accountHistory');

class Statement {
  printStatement(transactions) {
    this.printHeader();
    this.printBody(transactions);
  }

  printHeader() {
    console.log('date || credit || debit || balance');
  }

  printBody(transactions) {
    transactions.reverse().map((transaction) => {
      if (transaction[0] == 'deposit') {
        console.log(`date || ${transaction[1]} || || ${transaction[2]}`);
      } else {
        console.log(`date || || ${transaction[1]} || ${transaction[2]}`);
      }
    });
  }
}

module.exports = Statement;
