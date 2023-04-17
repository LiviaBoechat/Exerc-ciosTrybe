const addToInventory = require('../src/addToInventory');

const inventory = [0, 1, 2];

describe('a função addToInventory', () => {
  it('adiciona item ao inventário', () => {
    const previousLength = inventory.length;
    addToInventory(inventory, 3);
    expect(inventory).toContain(3);
    expect(inventory).toHaveLength(previousLength + 1);
  });
  it('lança exceção se não for passado um array', () => {
    expect(() => { addToInventory(); }).toThrow();
  });
});