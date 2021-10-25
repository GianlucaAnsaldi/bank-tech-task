class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amt) {
    this.balance += amt;
  }
}

module.exports = BankAccount;
