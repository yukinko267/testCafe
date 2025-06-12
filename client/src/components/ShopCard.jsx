import React from 'react';

const ShopCard = ({ shop }) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    }}
  >
    <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>{shop.name}</h2>
    <p><strong>ジャンル:</strong> {shop.genre.name}</p>
    <p><strong>予算:</strong> {shop.budget.name}</p>
    <p><strong>住所:</strong> {shop.address}</p>
    <p><strong>営業時間:</strong> {shop.open}</p>
  </div>
);

export default ShopCard;
