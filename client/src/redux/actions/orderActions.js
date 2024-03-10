import axios from 'axios';
import * as actionTypes from '../actionTypes/orderActionTypes';

// Action Creators
const placeOrderRequest = () => ({ type: actionTypes.PLACE_ORDER_REQUEST });
const placeOrderSuccess = (orderId) => ({ type: actionTypes.PLACE_ORDER_SUCCESS, payload: orderId });
const placeOrderFail = (error) => ({ type: actionTypes.PLACE_ORDER_FAIL, payload: error });

const fetchAllOrdersRequest = () => ({ type: actionTypes.FETCH_ALL_ORDERS_REQUEST });
const fetchAllOrdersSuccess = (orders) => ({ type: actionTypes.FETCH_ALL_ORDERS_SUCCESS, payload: orders });
const fetchAllOrdersFail = (error) => ({ type: actionTypes.FETCH_ALL_ORDERS_FAIL, payload: error });

// Add other order action creators here...

// Thunk Actions
export const placeOrder = (orderData) => async (dispatch) => {
  try {
    dispatch(placeOrderRequest());
    const response = await axios.post('/api/orders/place', orderData);
    dispatch(placeOrderSuccess(response.data.orderId));
  } catch (error) {
    dispatch(placeOrderFail(error.response.data.message));
  }
};

export const fetchAllOrders = () => async (dispatch) => {
  try {
    dispatch(fetchAllOrdersRequest());
    const response = await axios.get('/api/orders/all');
    dispatch(fetchAllOrdersSuccess(response.data));
  } catch (error) {
    dispatch(fetchAllOrdersFail(error.response.data.message));
  }
};

// Add other order thunk actions here...
