import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' /> {/* Agrega el signo "=" después de "alt" */}
      </picture>
      <section>
        <p className='Info'>
          Categoría: {category} {/* Cambia "Categoria" a "Categoría" */}
        </p>
        <p className='Info'>
          Descripción: {description}
        </p>
        <p className='Info'>
          Precio: ${price}
        </p>
      </section>
      <footer className='ItemFooter'>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} /> {/* Cambia "console.img" a "console.log" y agrega "quantity" como argumento */}
      </footer>
    </article>
  );
}

export default ItemDetail;