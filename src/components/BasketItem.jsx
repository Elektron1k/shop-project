import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem({ offerId, displayName, price, quantity }) {
  const { deleteGood, addGoodFromBasket, reduceGoodFromBasket } =
    useContext(ShopContext);

  return (
    <li className="collection-item">
      {displayName}
      <span>
        <i
          className="small material-icons basket-quontity"
          onClick={() => reduceGoodFromBasket(offerId)}
        >
          remove
        </i>
      </span>
      x {quantity}
      <span>
        <i
          className="small material-icons basket-quontity"
          onClick={() => addGoodFromBasket(offerId)}
        >
          add
        </i>
      </span>
      = {price * quantity} $
      <span className="secondary-content" onClick={() => deleteGood(offerId)}>
        <i className="material-icons basket-delete">clear</i>
      </span>
    </li>
  );
}

export default BasketItem;
