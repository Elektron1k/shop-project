import { useEffect, useState } from 'react';
import Alert from '../Alert';
import { API_KEY, API_URL } from '../config';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

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
    setAlertName(good.displayName);
  };

  const deleteGood = (id) => {
    const newOrder = order.filter((el) => el.offerId !== id);
    setOrder(newOrder);
  };

  const addGoodFromBasket = (id) => {
    setOrder(
      order.map((el) => {
        if (el.offerId === id) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      })
    );
  };

  const reduceGoodFromBasket = (id) => {
    setOrder(
      order.map((el) => {
        if (el.offerId === id) {
          return {
            ...el,
            quantity: el.quantity - 1,
          };
        } else {
          return el;
        }
      })
    );
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('');
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
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addGood={addGood} />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          deleteGood={deleteGood}
          addGoodFromBasket={addGoodFromBasket}
          reduceGoodFromBasket={reduceGoodFromBasket}
        />
      )}
      {alertName && <Alert alertName={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
