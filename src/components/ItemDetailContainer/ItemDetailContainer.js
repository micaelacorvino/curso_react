import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
//import { getProductsById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getDoc , doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true)

    const productRef = doc (db, 'products', productId)

    getDoc(productRef)
      .then(documentSnapshot => {

        const fields = documentSnapshot.data()
        const productsAdapted = { id: documentSnapshot.id, ...fields} 
        setProduct(productsAdapted)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {

        setLoading(false)
      })
    /*getProductsById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });*/
  }, [itemId]);

    if(loading) {
      return <h1>Cargando producto</h1>
    }
 
  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
      </div>
  );
};

export default ItemDetailContainer;