const AccountHistory = require('./accountHistory');

class BankAccount {
  constructor(balance = 0, accountHistory = new AccountHistory()) {
    this.balance = balance;
    this.accountHistory = accountHistory;
  }

  deposit(amt) {
    this.balance += amt;
    this.accountHistory.addDeposit(amt, this.balance);
  }

  withdraw(amt) {
    this.balance -= amt;
    this.accountHistory.addWithdrawal(amt, this.balance);
  }

  showBalance() {
    return this.balance;
  }

  printHeader() {
    console.log('date || credit || debit || balance');
  }

  printBody() {
    this.accountHistory.transactions.reverse().map((transaction) => {
      if (transaction[0] == 'deposit') {
        console.log(`date || ${transaction[1]} || || ${transaction[2]}`);
      } else {
        console.log(`date || || ${transaction[1]} || ${transaction[2]}`);
      }
    });
  }

  printStatement() {
    this.printHeader();
    this.printBody();
  }
}

module.exports = BankAccount;
