


const products = [
    {
      id: '1',
      name: 'Iphone 14',
      price: 300000,
      category: 'Celular',
      img: 'https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/02/iPhone_14_Pro_Silver_PDP_Image_Position-1a_MXLA.jpg',
      stock: 25,
      description: 'Descripción del Iphone 14',
    },
    {
      id: '2',
      name: 'Samsung S21',
      price: 250000,
      category: 'Celular',
      img: 'https://coppelar.vtexassets.com/arquivos/ids/1712832/198_62940b0d2f10c.jpg?v=637895504152230000',
      stock: 25,
      description: 'Descripción del Samsung S21',
    },
    {
      id: '3',
      name: 'Ipad 8va generación',
      price: 300000,
      category: 'Tablet',
      img: 'https://www.cqnetcr.com/109101-thickbox_default/tablet-apple-ipad-102-wi-fi-8-generacion-3-gb.jpg',
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

  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        
        const filteredProducts = products.filter((product) => product.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  };
  
 