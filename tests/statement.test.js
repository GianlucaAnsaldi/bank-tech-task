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
    statement.printHeader();
    expect(console.log).toHaveBeenCalledWith(
      'date || credit || debit || balance'
    );
  });

  test('can print the body of the statement', () => {
    let mockTransactions = [['deposit', 10, 10]];
    statement.printBody(mockTransactions);
    expect(console.log).toHaveBeenCalledWith('date || 10 || || 10');
  });

  test('can print the full statement', () => {
    let mockTransactions = [
      ['deposit', 10, 10],
      ['withdrawal', 3, 7],
    ];
    statement.printStatement(mockTransactions);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      'date || credit || debit || balance'
    );
    expect(console.log).toHaveBeenNthCalledWith(2, 'date || || 3 || 7');
    expect(console.log).toHaveBeenNthCalledWith(3, 'date || 10 || || 10');
  });
});
