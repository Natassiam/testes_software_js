const { listAllProducts  } = require('./functions');


describe('Testando funções de products', () => {
  // 1. Teste se a função listAllProducts() retorna o array de produtos
  it('Teste se a função listAllProducts() retorna o array de produtos', () => {
    expect(typeof listAllProducts()).toBe('object');
  });

  // 2. Teste se a função findProductById() retorna o objeto correto

});