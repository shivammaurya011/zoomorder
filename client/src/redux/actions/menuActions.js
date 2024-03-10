import axios from 'axios';
import * as actionTypes from '../actionTypes/menuActionTypes';

// Action Creators
const addMenuItemRequest = () => ({ type: actionTypes.ADD_MENU_ITEM_REQUEST });
const addMenuItemSuccess = () => ({ type: actionTypes.ADD_MENU_ITEM_SUCCESS });
const addMenuItemFail = (error) => ({ type: actionTypes.ADD_MENU_ITEM_FAIL, payload: error });

const fetchMenuRequest = () => ({ type: actionTypes.FETCH_MENU_REQUEST });
const fetchMenuSuccess = (menuItems) => ({ type: actionTypes.FETCH_MENU_SUCCESS, payload: menuItems });
const fetchMenuFail = (error) => ({ type: actionTypes.FETCH_MENU_FAIL, payload: error });

// Add other menu action creators here...

// Thunk Actions
export const addMenuItem = (restaurantId, menuItemData) => async (dispatch) => {
  try {
    dispatch(addMenuItemRequest());
    await axios.post(`/api/menus/${restaurantId}/add-item`, menuItemData);
    dispatch(addMenuItemSuccess());
  } catch (error) {
    dispatch(addMenuItemFail(error.response.data.message));
  }
};

export const fetchMenu = (restaurantId) => async (dispatch) => {
  try {
    dispatch(fetchMenuRequest());
    const response = await axios.get(`/api/menus/${restaurantId}`);
    dispatch(fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(fetchMenuFail(error.response.data.message));
  }
};

// Add other menu thunk actions here...
