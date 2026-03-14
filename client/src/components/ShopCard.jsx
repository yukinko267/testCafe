import React from 'react';

const ShopCard = ({ shop, menuItems }) => (
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
    
    {menuItems && menuItems.length > 0 && (
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>メニュー</h3>
        <div style={{ display: 'grid', gap: '10px' }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '10px',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
              }}
            >
              <p style={{ margin: '0' }}><strong>{item.name}</strong></p>
              {item.price && <p style={{ margin: '5px 0 0 0' }}>¥{item.price}</p>}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ShopCard;
