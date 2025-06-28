import React from 'react';
import './App.css'

function ShopCard({ product }) {
  const { name, price, color, img } = product;
  return (
    <div className="shop-card">
    <h3>{name}</h3>
  <p className="color">{color}</p>
  <img src={img} alt={name} />
  <div className="purchase-info">
    <p className="price">${price}</p>
    <button>ADD TO CART</button>
  </div>
</div>


  );
}


export default ShopCard;
