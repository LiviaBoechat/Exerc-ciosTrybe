const clearInventory = require('../src/clearInventory');

describe('A função clearInventory', () => {
  const array = [
    { name: 'Maria', quantity: 0, rua: 3, lastName: 'Silva' }, 
    { name: 'Maria', quantity: 1, rua: 3, lastName: 'Silva' }, 
    { name: 'Maria', quantity: 2, rua: 3, lastName: 'Silva' }, 
    { name: 'Maria', quantity: 3, rua: 3, lastName: 'Silva' }
  ];
  it('remove itens com quantidade 0', () => {
    const previousLength = array.length;
    expect(clearInventory(array)).toHaveLength(previousLength - 1);
  });
});
