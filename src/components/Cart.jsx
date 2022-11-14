import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
  const { order, handleBasketShow } = useContext(ShopContext);
  return (
    <div className="cart orange darken-3 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_basket</i>
      {order.length ? (
        <span className="cart-quantity">{order.length}</span>
      ) : null}
    </div>
  );
}

export default Cart;
