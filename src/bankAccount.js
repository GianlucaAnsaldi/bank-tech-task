const AccountHistory = require('./accountHistory');
const Statement = require('./statement');

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

  printBankStatement(transactions = this.accountHistory.getTransactions()) {
    let statement = new Statement();
    statement.printStatement(transactions);
  }
}

module.exports = BankAccount;
