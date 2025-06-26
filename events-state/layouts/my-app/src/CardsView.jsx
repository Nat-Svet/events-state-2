import React from 'react';
import ShopCard from './ShopCard';

function CardsView({ cards }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap',
        marginTop: 20,
      }}
    >
      {cards.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
}

export default CardsView;
