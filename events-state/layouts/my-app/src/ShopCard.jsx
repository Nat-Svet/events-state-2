import React from 'react';

function ShopCard({ product }) {
  const { name, price, color, img } = product;
  return (
    <div
      className="shop-card"
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 10,
        width: 200,
        boxSizing: 'border-box',
      }}
    >
      <img src={img} alt={name} style={{ width: '100%', borderRadius: 8 }} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Color: {color}</p>
      <button
        style={{
          border: '2px solid black',
          borderRadius: '40%',
          color: 'black',
          backgroundColor: 'transparent',
          padding: '8px 16px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginTop: '10px',
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default ShopCard;
