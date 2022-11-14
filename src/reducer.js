export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    case 'ADD_GOOD': {
      const goodIndex = state.order.findIndex(
        (el) => el.offerId === payload.offerId
      );

      let newOrder = null;

      if (goodIndex < 0) {
        const newGood = {
          ...payload,
          quantity: 1,
        };

        newOrder = [...state.order, newGood];
      } else {
        newOrder = state.order.map((el, index) => {
          if (index === goodIndex) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          } else {
            return el;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }

    case 'DELETE_GOOD':
      return {
        ...state,
        order: state.order.filter((el) => el.offerId !== payload.id),
      };

    case 'ADD_GOOD_FROM_BASKET':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.offerId === payload.id) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          } else {
            return el;
          }
        }),
      };

    case 'REDUCE_GOOD_FROM_BASKET':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.offerId === payload.id) {
            return {
              ...el,
              quantity: el.quantity > 1 ? el.quantity - 1 : 0,
            };
          } else {
            return el;
          }
        }),
      };

    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    default:
      return state;
  }
}
