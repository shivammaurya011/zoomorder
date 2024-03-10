import * as actionTypes from '../actionType/menuActionTypes';

const initialState = {
  menus: [],
  selectedMenu: null,
  loading: false,
  success: false,
  error: null,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MENU_ITEM_REQUEST:
    case actionTypes.FETCH_MENU_REQUEST:
    case actionTypes.UPDATE_MENU_ITEM_REQUEST:
    case actionTypes.DELETE_MENU_ITEM_REQUEST:
      return { ...state, loading: true, success: false, error: null };

    case actionTypes.ADD_MENU_ITEM_SUCCESS:
    case actionTypes.FETCH_MENU_SUCCESS:
    case actionTypes.UPDATE_MENU_ITEM_SUCCESS:
    case actionTypes.DELETE_MENU_ITEM_SUCCESS:
      return { ...state, loading: false, success: true, error: null };

    case actionTypes.ADD_MENU_ITEM_FAIL:
    case actionTypes.FETCH_MENU_FAIL:
    case actionTypes.UPDATE_MENU_ITEM_FAIL:
    case actionTypes.DELETE_MENU_ITEM_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export default menuReducer;
