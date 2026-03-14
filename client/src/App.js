import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ShopCard from './components/ShopCard';
import RandomButton from './components/RandomButton';

function App() {
  const [shops, setShops] = useState([]);
  const [randomShop, setRandomShop] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchShops = async () => {
      const res = await fetch('http://localhost:5000/api/hotpepper');
      const data = await res.json();
      setShops(data.results.shop);
    };
    fetchShops();
  }, []);

  const getRandomShop = async () => {
    if (shops.length > 0) {
      setLoading(true);
      const idx = Math.floor(Math.random() * shops.length);
      const selectedShop = shops[idx];
      setRandomShop(selectedShop);
      
      try {
        const menuRes = await fetch(`http://localhost:5000/api/scrape-menu?url=${encodeURIComponent(selectedShop.urls.pc)}`);
        const menuData = await menuRes.json();
        setMenuItems(menuData);
      } catch (error) {
        console.error('メニュー情報の取得に失敗しました:', error);
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <Header />
      <RandomButton onClick={getRandomShop} />
      {loading && <p>メニュー情報を取得中...</p>}
      {randomShop && <ShopCard shop={randomShop} menuItems={menuItems} />}
    </div>
  );
}

export default App;
