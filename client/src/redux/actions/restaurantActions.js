import axios from 'axios';
import * as actionTypes from '../actionTypes/restaurantActionTypes';

// Action Creators
const createRestaurantRequest = () => ({ type: actionTypes.CREATE_RESTAURANT_REQUEST });
const createRestaurantSuccess = () => ({ type: actionTypes.CREATE_RESTAURANT_SUCCESS });
const createRestaurantFail = (error) => ({ type: actionTypes.CREATE_RESTAURANT_FAIL, payload: error });

const fetchAllRestaurantsRequest = () => ({ type: actionTypes.FETCH_ALL_RESTAURANTS_REQUEST });
const fetchAllRestaurantsSuccess = (restaurants) => ({ type: actionTypes.FETCH_ALL_RESTAURANTS_SUCCESS, payload: restaurants });
const fetchAllRestaurantsFail = (error) => ({ type: actionTypes.FETCH_ALL_RESTAURANTS_FAIL, payload: error });

// Add other restaurant action creators here...

// Thunk Actions
export const createRestaurant = (restaurantData) => async (dispatch) => {
  try {
    dispatch(createRestaurantRequest());
    await axios.post('/api/restaurants/create', restaurantData);
    dispatch(createRestaurantSuccess());
  } catch (error) {
    dispatch(createRestaurantFail(error.response.data.message));
  }
};

export const fetchAllRestaurants = () => async (dispatch) => {
  try {
    dispatch(fetchAllRestaurantsRequest());
    const response = await axios.get('/api/restaurants/all');
    dispatch(fetchAllRestaurantsSuccess(response.data));
  } catch (error) {
    dispatch(fetchAllRestaurantsFail(error.response.data.message));
  }
};

// Add other restaurant thunk actions here...
