import {
  cartItem
} from '../constants';

const INITIAL = {
  cartItems: []
}

const reducer = (state = INITIAL, action) => {
  const {
    type,
    payload
  } = action;


  switch (type) {
    case cartItem.add:
      return {
        ...state,
        cartItems: updateCartItem(payload, state.cartItems)
      };
    case cartItem.del:
      return {
        ...state,
        cartItems: removeCartItem(payload, state.cartItems)
      };
    default:
      return state;

  }
}

export default reducer;

const updateCartItem = (payload, cartItems) => {
  const items = cartItems;

  if (items.length === 0) {
    items.push(payload);
  } else {
    const itemFound = items.find(el => el.id === payload.id);
    if (!itemFound) {
      items.push(payload);
      return items;
    }
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i].id === payload.id) {
      items[i] = payload;
    }
  }
  return items;
}

const removeCartItem = (payload, cartItems) => {
  const items = cartItems;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === payload) {
      items.splice(i, 1);
    }
  }
  return items;
}


// const addToCart = (payload, cart) => {
//   const items = cart;
//   if (items.length === 0) {
//     items.push[payload];
//     return items;
//   }

//   const itemFound = items.find(el => el.id === payload.id);
//   if (!itemFound) {
//     items.push[payload];
//     return items;
//   }

//   for (let i = 0; i < items.length; i++) {
//     if (items[i].id === payload._id) {
//       items[i] = payload;
//     }
//   }
//   return items;
// }

// const removeCartItem = (payload, cartItems) => {
//   const cart = cartItems;
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i]._id === payload._id) {
//       cart.splice(i, 1);
//     }
//   }
//   return cart;
// }