import {combineReducers} from 'redux';

import sideMenuReducer from './reducers/sideMenu';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
   sideMenuReducer,
   cartReducer
})

export default  rootReducer;