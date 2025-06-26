import React from 'react';
import ShopItem from './ShopItem';

function ListView({ items }) {
  return (
    <div style={{ marginTop: 20 }}>
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
}

export default ListView;
