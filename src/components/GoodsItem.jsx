import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem({
  offerId,
  displayName,
  displayDescription,
  price,
  displayAssets,
}) {
  const { addGood } = useContext(ShopContext);
  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addGood({
              offerId,
              displayName,
              price: price.finalPrice,
            })
          }
        >
          BUY
        </button>
        <span className="right price">{price.finalPrice} $</span>
      </div>
    </div>
  );
}

export default GoodsItem;
