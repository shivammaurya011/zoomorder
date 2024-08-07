import * as actionTypes from '../actionType/userActionType';

const initialState = {
  users: [],
  userProfile: null,
  loading: false,
  success: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.UPDATE_PROFILE_REQUEST:
    case actionTypes.DELETE_PROFILE_REQUEST:
      return { ...state, loading: true, success: false, error: null };

    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        userProfile: action.payload.user,
      };

    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        userProfile: action.payload,
      };

    case actionTypes.DELETE_PROFILE_SUCCESS:
      const updatedUsers = state.users.filter(user => user.id !== action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        users: updatedUsers,
      };

    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
    case actionTypes.UPDATE_PROFILE_FAIL:
    case actionTypes.DELETE_PROFILE_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
