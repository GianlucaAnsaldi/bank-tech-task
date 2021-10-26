// const AccountHistory = require('./accountHistory');

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.history = [];
  }

  deposit(amt) {
    this.balance += amt;
    this.history.push(['deposit', parseInt(`${amt}`), this.balance]);
  }

  withdraw(amt) {
    this.balance -= amt;
    this.history.push(['withdrawal', parseInt(`${amt}`), this.balance]);
  }

  showBalance() {
    return this.balance;
  }

  printHeader() {
    console.log('date || credit || debit || balance');
  }

  printBody() {
    this.history.map((transaction) => {
      console.log(`date || ${transaction[1]} || || ${transaction[2]}`);
    });
  }
}

module.exports = BankAccount;

// history = new AccountHistory();
