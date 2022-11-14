import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  value.addGood = (good) => {
    dispatch({ type: 'ADD_GOOD', payload: good });
  };

  value.deleteGood = (id) => {
    dispatch({ type: 'DELETE_GOOD', payload: { id } });
  };

  value.addGoodFromBasket = (id) => {
    dispatch({ type: 'ADD_GOOD_FROM_BASKET', payload: { id } });
  };

  value.reduceGoodFromBasket = (id) => {
    dispatch({ type: 'REDUCE_GOOD_FROM_BASKET', payload: { id } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
