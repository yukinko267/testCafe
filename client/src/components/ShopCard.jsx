import "./ShopCard.css";

function ShopCard({ shop }) {
  return (
    <div className="shop-card">

      <img
        className="shop-image"
        src={shop.photo.pc.l}
        alt={shop.name}
      />

      <div className="shop-content">
        <h2 className="shop-title">{shop.name}</h2>

        <p className="shop-area">
          📍 {shop.address}
        </p>

        <p className="shop-budget">
          💰 {shop.budget?.name}
        </p>

        <a
          className="shop-button"
          href={shop.urls.pc}
          target="_blank"
          rel="noopener noreferrer"
        >
          ホットペッパーで見る →
        </a>
      </div>

    </div>
  );
}

export default ShopCard;