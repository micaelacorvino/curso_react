


const products = [
    {
      id: '1',
      name: 'Iphone 14',
      price: 300000,
      category: 'celular',
      img: 'https://images.app.goo.gl/bNkjbr5ZWdegP3XX8',
      stock: 25,
      description: 'Descripción del Iphone 14',
    },
    {
      id: '2',
      name: 'Samsung S21',
      price: 250000,
      category: 'celular',
      img: 'https://www.rosarioalcosto.com/product-samsung-sm-g991bzwklaro-2103171554296904.h',
      stock: 25,
      description: 'Descripción del Samsung S21',
    },
    {
      id: '3',
      name: 'Ipad 8va generación',
      price: 300000,
      category: 'tablet',
      img: 'https://images.app.goo.gl/4mw8grJbVLhtCW4b9',
      stock: 25,
      description: 'Descripción del Ipad 8va generación',
    },
  ];
  


  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      }, 500);
    });
  };

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(prod => prod.category === categoryId);
        resolve(filteredProducts);
      }, 500);
    });
  };

  
 