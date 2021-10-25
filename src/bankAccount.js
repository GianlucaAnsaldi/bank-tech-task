class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amt) {
    this.balance += amt;
  }

  withdraw(amt) {
    this.balance -= amt;
  }

  showBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
