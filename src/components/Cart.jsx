function Cart({ quantity = 0 }) {
  return (
    <div className="cart orange darken-3 white-text">
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
