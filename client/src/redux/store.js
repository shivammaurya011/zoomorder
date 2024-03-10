import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';

import userReducer from './reducers/userReducer';
import restaurantReducer from './reducers/restaurantReducers';
import orderReducer from './reducers/orderReducers';
import menuReducer from './reducers/menuReducers';

const rootReducer = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer,
  order: orderReducer,
  menu: menuReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
