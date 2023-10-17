

import { useState, useEffect } from 'react';
//import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('Primer titulo')

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    
    const productsRef = categoryId 
      ? collection(db, 'products')
      : query(collection(db, 'products'), where('category', '==', categoryId))

    getDocs(productsRef)
      .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => { 
          const fields = doc.data()
          console.log(fields)

          return { id: doc.id, ...fields }
        })

        setProducts(productsAdapted)
      }).catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
    //const asyncFunc = categoryId ? getProductsByCategory : getProducts

    /*asyncFunc(categoryId)
      .then(result => {
        setProducts(result);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false)
      })*/
      
    }, [categoryId]);

    useEffect(() => {
      setTimeout(() => {
          setTitle('Segundo titulo')
      }, 3000)
    }, [])
  
    if(loading) {
      return <h1>Cargando productos...</h1>
    }
   
  
    return (
      <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
      </div>
    );
  };
  
  export default ItemListContainer;


