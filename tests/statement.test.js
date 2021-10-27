const Statement = require('../src/statement');

describe('Printing statement', () => {
  let statement;

  beforeEach(() => {
    statement = new Statement();
  });

  console.log = jest.fn();

  afterEach(() => {
    console.log.mockRestore();
  });

  test('can print the header of the statement', () => {
    statement._printHeader();
    expect(console.log).toHaveBeenCalledWith(
      'date || credit || debit || balance'
    );
  });

  test('can print the body of the statement', () => {
    let mockTransactions = [['27-10-2021', 'deposit', 10, 10]];
    statement._printBody(mockTransactions);
    expect(console.log).toHaveBeenCalledWith('27-10-2021 || 10.00 || || 10.00');
  });

  test('can print the full statement', () => {
    let mockTransactions = [
      ['27-10-2021', 'deposit', 10, 10],
      ['27-10-2021', 'withdrawal', 3, 7],
    ];
    statement._printStatement(mockTransactions);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      'date || credit || debit || balance'
    );
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      '27-10-2021 || || 3.00 || 7.00'
    );
    expect(console.log).toHaveBeenNthCalledWith(
      3,
      '27-10-2021 || 10.00 || || 10.00'
    );
  });
});
