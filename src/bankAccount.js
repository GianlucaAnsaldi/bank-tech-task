const AccountHistory = require('./accountHistory');
const Statement = require('./statement');

class BankAccount {
  constructor(balance = 0, accountHistory = new AccountHistory()) {
    this.balance = balance;
    this.accountHistory = accountHistory;
  }

  deposit(amt, date = new Date()) {
    this.balance += amt;
    this.accountHistory._addDeposit(date, amt, this.balance);
  }

  withdraw(amt, date = new Date()) {
    this.balance -= amt;
    this.accountHistory._addWithdrawal(date, amt, this.balance);
  }

  showBalance() {
    return this.balance;
  }

  printBankStatement(transactions = this.accountHistory._getTransactions()) {
    let statement = new Statement();
    statement._printStatement(transactions);
  }
}

module.exports = BankAccount;
