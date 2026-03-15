import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ShopCard from "./components/ShopCard";
import RandomButton from "./components/RandomButton";

function App() {
  const [shops, setShops] = useState([]);
  const [randomShops, setRandomShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      const res = await fetch("http://localhost:5000/api/hotpepper");
      const data = await res.json();
      setShops(data.results.shop);
    };

    fetchShops();
  }, []);

  const getRandomShop = () => {
    const shuffled = [...shops].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setRandomShops(selected);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <Header />

      <RandomButton onClick={getRandomShop} />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {randomShops.map((shop, index) => (
          <ShopCard key={index} shop={shop} />
        ))}
      </div>

    </div>
  );
}

export default App;