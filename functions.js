const { products } = require('./products');

// Arquivo com funcoes
// Função para listar todos os produtos
function listAllProducts() {
  return products.map(product => product.name);
}

// Função para buscar um produto por ID
function findProductById(id) {
  return products.find(product => product.id === id);
}

// Função para listar produtos por categoria
function listProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

// Função para adicionar um novo produto
function addProduct(newProduct) {
  products.push(newProduct);
}

// Exemplo de uso
listAllProducts();
findProductById(2);
listProductsByCategory("Eletrônicos");
addProduct({ id: 6, name: "Microondas", category: "Eletrodomésticos", price: 400.00, stock: 12 });


module.exports = {
  listAllProducts,
  findProductById,
  listProductsByCategory,
  addProduct
};