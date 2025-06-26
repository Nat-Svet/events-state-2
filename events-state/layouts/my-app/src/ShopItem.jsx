import React from 'react';

function ShopItem({ product }) {
    const { name, price, color, img } = product;
    return (
        <div
            className="shop-item"
            style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ddd',
                borderRadius: 8,
                padding: 10,
                marginBottom: 10,
                maxWidth: 600,
                boxSizing: 'border-box',
            }}
        >
            <img
                src={img}
                alt={name}
                style={{
                    width: 100,
                    height: 100,
                    objectFit: 'cover',
                    borderRadius: 8,
                    marginRight: 15,
                    flexShrink: 0,
                }}
            />
            <div>
                <h3>{name}</h3>
                <p>Color: {color}</p>
                <p>Price: ${price}</p>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
}

export default ShopItem;
