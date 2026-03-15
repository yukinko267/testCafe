// client/src/components/ShopDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopDetail = () => {

  const { id } = useParams();

  const [shop, setShop] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {

    const fetchShop = async () => {

      try {

        const res = await fetch(`http://localhost:5000/shops/${id}`);
        const data = await res.json();

        setShop(data.shop);
        setMenuItems(data.menuItems || []);

      } catch (err) {
        console.error(err);
      }

    };

    fetchShop();

  }, [id]);

  if (!shop) {
    return <p>読み込み中...</p>;
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px"
      }}
    >

      <h1 style={{ marginBottom: "20px" }}>{shop.name}</h1>

      <p><strong>ジャンル:</strong> {shop.genre.name}</p>
      <p><strong>予算:</strong> {shop.budget.name}</p>
      <p><strong>住所:</strong> {shop.address}</p>
      <p><strong>営業時間:</strong> {shop.open}</p>

      <div style={{ marginTop: "40px" }}>

        <h2>メニュー</h2>

        {menuItems.length === 0 && (
          <p>メニュー情報がありません</p>
        )}

        <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
          {menuItems.map((item) => (

            <div
              key={item.id}
              style={{
                padding: "10px",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px"
              }}
            >

              <p style={{ margin: 0 }}>
                <strong>{item.name}</strong>
              </p>

              {item.price && (
                <p style={{ margin: "5px 0 0 0" }}>
                  ¥{item.price}
                </p>
              )}

            </div>

          ))}
        </div>

      </div>

    </div>
  );
};

export default ShopDetail;