import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ShopCard from './components/ShopCard';
import RandomButton from './components/RandomButton';

function App() {
  const [shops, setShops] = useState([]);
  const [randomShop, setRandomShop] = useState(null);

  useEffect(() => {
    const fetchShops = async () => {
      const res = await fetch('http://localhost:5000/api/hotpepper');
      const data = await res.json();
      setShops(data.results.shop);
    };
    fetchShops();
  }, []);

  const getRandomShop = () => {
    if (shops.length > 0) {
      const idx = Math.floor(Math.random() * shops.length);
      setRandomShop(shops[idx]);
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <Header />
      <RandomButton onClick={getRandomShop} />
      {randomShop && <ShopCard shop={randomShop} />}
    </div>
  );
}

export default App;
