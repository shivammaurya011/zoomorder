
import * as actionTypes from '../actionType/restaurantActionTypes';

const initialState = {
  restaurants: [],
  selectedRestaurant: null,
  loading: false,
  success: false,
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_RESTAURANT_REQUEST:
    case actionTypes.FETCH_ALL_RESTAURANTS_REQUEST:
    case actionTypes.UPDATE_RESTAURANT_REQUEST:
    case actionTypes.DELETE_RESTAURANT_REQUEST:
      return { ...state, loading: true, success: false, error: null };

    case actionTypes.CREATE_RESTAURANT_SUCCESS:
    case actionTypes.FETCH_ALL_RESTAURANTS_SUCCESS:
    case actionTypes.UPDATE_RESTAURANT_SUCCESS:
    case actionTypes.DELETE_RESTAURANT_SUCCESS:
      return { ...state, loading: false, success: true, error: null };

    case actionTypes.CREATE_RESTAURANT_FAIL:
    case actionTypes.FETCH_ALL_RESTAURANTS_FAIL:
    case actionTypes.UPDATE_RESTAURANT_FAIL:
    case actionTypes.DELETE_RESTAURANT_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export default restaurantReducer;
