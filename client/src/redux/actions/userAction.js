import axios from 'axios';
import * as actionTypes from '../actionTypes/userActionTypes';

// Action Creators
const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
const registerSuccess = () => ({ type: actionTypes.REGISTER_SUCCESS });
const registerFail = (error) => ({ type: actionTypes.REGISTER_FAIL, payload: error });

const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
const loginSuccess = () => ({ type: actionTypes.LOGIN_SUCCESS });
const loginFail = (error) => ({ type: actionTypes.LOGIN_FAIL, payload: error });

const updateProfileRequest = () => ({ type: actionTypes.UPDATE_PROFILE_REQUEST });
const updateProfileSuccess = () => ({ type: actionTypes.UPDATE_PROFILE_SUCCESS });
const updateProfileFail = (error) => ({ type: actionTypes.UPDATE_PROFILE_FAIL, payload: error });

const deleteProfileRequest = () => ({ type: actionTypes.DELETE_PROFILE_REQUEST });
const deleteProfileSuccess = () => ({ type: actionTypes.DELETE_PROFILE_SUCCESS });
const deleteProfileFail = (error) => ({ type: actionTypes.DELETE_PROFILE_FAIL, payload: error });

// Thunk Actions
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    await axios.post('/api/users/register', userData);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    await axios.post('/api/users/login', userData);
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

export const updateProfile = (userId, updatedProfileData) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());
    await axios.put(`/api/users/${userId}/update-profile`, updatedProfileData);
    dispatch(updateProfileSuccess());
  } catch (error) {
    dispatch(updateProfileFail(error.response.data.message));
  }
};

export const deleteProfile = (userId) => async (dispatch) => {
  try {
    dispatch(deleteProfileRequest());
    await axios.delete(`/api/users/${userId}/delete-profile`);
    dispatch(deleteProfileSuccess());
  } catch (error) {
    dispatch(deleteProfileFail(error.response.data.message));
  }
};
