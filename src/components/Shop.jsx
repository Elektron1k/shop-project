import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const addGood = (good) => {
    const goodIndex = order.findIndex((el) => el.offerId === good.offerId);

    if (goodIndex < 0) {
      const newGood = {
        ...good,
        quantity: 1,
      };
      setOrder([...order, newGood]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === goodIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });

      setOrder(newOrder);
    }
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addGood={addGood} />}
    </main>
  );
}

export default Shop;
