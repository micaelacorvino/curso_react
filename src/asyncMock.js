


const products = [
    {
      id: '1',
      name: 'Iphone 14',
      price: 300000,
      category: 'celular',
      img: 'https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/02/iPhone_14_Pro_Silver_PDP_Image_Position-1a_MXLA.jpg',
      stock: 25,
      description: 'Frente de Ceramic Shield. Diseño de aluminio con parte posterior de vidrio',
    },
    {
      id: '2',
      name: 'Samsung S21',
      price: 250000,
      category: 'celular',
      img: 'https://coppelar.vtexassets.com/arquivos/ids/1712832/198_62940b0d2f10c.jpg?v=637895504152230000',
      stock: 25,
      description: 'Fotografía profesional al alcance de tu mano con el nuevo Samsung Galaxy S21 5G; con cámara de 12+64+12 Mp para explorar tu creatividad. ',
    },
    {
      id: '3',
      name: 'Ipad 8va generación',
      price: 300000,
      category: 'tablet',
      img: 'https://www.cqnetcr.com/109101-thickbox_default/tablet-apple-ipad-102-wi-fi-8-generacion-3-gb.jpg',
      stock: 25,
      description: 'Este producto combina la potencia y la capacidad de una computadora con la versatilidad y facilidad de uso que solo un iPad puede brindar.',
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
  
 