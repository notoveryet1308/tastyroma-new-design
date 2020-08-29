import {cartItem} from '../constants';

export const addItemToCart = (data)=>({
  type: cartItem.add,
  payload: data
})

export const removeItemFromCart = (id)=>({
  type: cartItem.del,
  payload: id
})
