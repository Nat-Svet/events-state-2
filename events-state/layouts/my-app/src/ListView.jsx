import React from 'react';
import ShopItem from './ShopItem';

function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((product, index) => (
        <div className="shop-item" key={index}>
          <img src={product.img} alt={product.name} />
          
            <h3>{product.name}</h3>
            <p className="color">{product.color}</p>
          
          
            <p className="price">${product.price}</p>
            <button>ADD TO CART</button>
          
        </div>
      ))}
    </div>
  );
}


export default ListView;
