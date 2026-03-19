import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ShopCard from "./components/ShopCard";
import RandomButton from "./components/RandomButton";

function App() {
  const [shops, setShops] = useState([]);
  const [randomShops, setRandomShops] = useState([]);
  const [nearbySpots, setNearbySpots] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      const res = await fetch("https://cafesearchishikawa.onrender.com/api/hotpepper");
      const data = await res.json();
      setShops(data.results.shop);
    };

    fetchShops();
  }, []);

  const getRandomShop = () => {
    const shuffled = [...shops].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setRandomShops(selected);
    setNearbySpots([]);
  };

  const handleShopClick = async (shop) => {
    console.log("クリックされた:", shop);

    const lat = parseFloat(shop.lat);
    const lng = parseFloat(shop.lng);

    if (!lat || !lng) {
      console.error("緯度経度が取得できてない", shop);
      return;
    }

    try {
      const res = await fetch(
        `https://cafesearchishikawa.onrender.com/api/nearby?lat=${lat}&lng=${lng}`
      );

      const data = await res.json();
      console.log("API結果:", data);

      setNearbySpots(data);
    } catch (error) {
      console.error("取得失敗", error);
    }
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
          <ShopCard
            key={index}
            shop={shop}
            onClick={() => handleShopClick(shop)}
          />
        ))}
      </div>

      {/* 結果表示 */}
      {nearbySpots.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3>この後のおすすめ（3000m以内）</h3>

          {nearbySpots.map((spot, index) => (
            <div key={index}>
              📍 {spot.name || "名前なし"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;