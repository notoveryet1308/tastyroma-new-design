import {sidemenu} from '../constants';

const INITIAL = {
  open: false
}

const reducer = (state = INITIAL, action)=>{
  const { type, payload} = action;
  switch(type){
    case sidemenu.show:
      return {
        ...state,
        open: payload
      };
    case sidemenu.hide:
      return {
        ...state,
        open: payload
      };
    default:
      return state;
  }
}

export default reducer;