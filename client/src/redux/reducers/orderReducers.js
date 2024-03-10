import * as actionTypes from '../actionType/orderActionTypes';

const initialState = {
  orders: [],
  selectedOrder: null,
  loading: false,
  success: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLACE_ORDER_REQUEST:
    case actionTypes.FETCH_ALL_ORDERS_REQUEST:
    case actionTypes.UPDATE_ORDER_REQUEST:
    case actionTypes.CANCEL_ORDER_REQUEST:
      return { ...state, loading: true, success: false, error: null };

    case actionTypes.PLACE_ORDER_SUCCESS:
    case actionTypes.FETCH_ALL_ORDERS_SUCCESS:
    case actionTypes.UPDATE_ORDER_SUCCESS:
    case actionTypes.CANCEL_ORDER_SUCCESS:
      return { ...state, loading: false, success: true, error: null };

    case actionTypes.PLACE_ORDER_FAIL:
    case actionTypes.FETCH_ALL_ORDERS_FAIL:
    case actionTypes.UPDATE_ORDER_FAIL:
    case actionTypes.CANCEL_ORDER_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export default orderReducer;
