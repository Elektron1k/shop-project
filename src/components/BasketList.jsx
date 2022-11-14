import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';
import BasketItem from './BasketItem';

function BasketList() {
  const { order, handleBasketShow, deleteGood } = useContext(ShopContext);

  let totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  useEffect(() => {
    order.length &&
      order.map((el) => {
        if (el.quantity <= 0) {
          deleteGood(el.offerId);
        }
        return { ...el };
      });
  });
  return (
    <>
      <div className="basket-list">
        <ul className="collection">
          <li className="collection-item active">Cart</li>
          {order.length ? (
            order.map((item) => <BasketItem key={item.offerId} {...item} />)
          ) : (
            <li className="collection-item">Cart is empty</li>
          )}
          <li className="collection-item active">Total cost: {totalPrice} $</li>
        </ul>
        <button className="btn btn-small">Checkout</button>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </div>
    </>
  );
}

export default BasketList;
