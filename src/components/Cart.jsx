function Cart({ quantity = 0, handleBasketShow }) {
  return (
    <div className="cart orange darken-3 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
