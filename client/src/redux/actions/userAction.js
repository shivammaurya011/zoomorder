import axios from 'axios';
import Cookies from 'js-cookie';

import * as actionTypes from '../actionType/userActionType';

const apiUrl = "http://localhost:3030/api";


// Register Actions
const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
const registerSuccess = (data) => ({ type: actionTypes.REGISTER_SUCCESS, payload:data });
const registerFail = (error) => ({ type: actionTypes.REGISTER_FAIL, payload: error });

// Login Actions
const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
const loginSuccess = (data) => ({ type: actionTypes.LOGIN_SUCCESS, payload: data });
const loginFail = (error) => ({ type: actionTypes.LOGIN_FAIL, payload: error });

// Update Profile Actions
const updateProfileRequest = () => ({ type: actionTypes.UPDATE_PROFILE_REQUEST });
const updateProfileSuccess = (data) => ({ type: actionTypes.UPDATE_PROFILE_SUCCESS, payload: data });
const updateProfileFail = (error) => ({ type: actionTypes.UPDATE_PROFILE_FAIL, payload: error });

// Delete Profile Actions
const deleteProfileRequest = () => ({ type: actionTypes.DELETE_PROFILE_REQUEST });
const deleteProfileSuccess = (data) => ({ type: actionTypes.DELETE_PROFILE_SUCCESS, payload: data });
const deleteProfileFail = (error) => ({ type: actionTypes.DELETE_PROFILE_FAIL, payload: error });

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const response = await axios.post(`${apiUrl}/users/register`, userData);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    let errorMessage = 'An error occurred while processing your request.';
    console.log(error.response.data.message)
    if (error.response.data.errors) {
      errorMessage = error.response.data.errors[0].message || errorMessage;
    }else if(error.response.data.message){
      errorMessage = error.response.data.message || errorMessage;
    }
    else if (error.request) {
      errorMessage = 'No response received from the server. Please try again later.';
    } else {
      errorMessage = error.message || errorMessage;
    }
    dispatch(registerFail(errorMessage));
  }
};


// Login Thunk
export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await axios.post(`${apiUrl}/users/login`, userData);
    const token = response.data.token
    Cookies.set("Token", token)
    dispatch(loginSuccess(response.data));
  } catch (error) {
    let errorMessage = 'An error occurred while processing your request.';
    console.log(error.response.data.message);
    if (error.response.data.errors) {
      errorMessage = error.response.data.errors[0].message || errorMessage;
    } else if (error.response.data.message) {
      errorMessage = error.response.data.message || errorMessage;
    } else if (error.request) {
      errorMessage = 'No response received from the server. Please try again later.';
    } else {
      errorMessage = error.message || errorMessage;
    }
    dispatch(loginFail(errorMessage)); 
  }
};


// Update Profile Thunk
export const updateProfile = (userId, updatedProfileData) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());
    const response = await axios.put(`${apiUrl}/users/${userId}/update-profile`, updatedProfileData);
    dispatch(updateProfileSuccess(response.data));
  } catch (error) {
    dispatch(updateProfileFail(error.response.data.errors[0].message));
  }
};

// Delete Profile Thunk
export const deleteProfile = (userId) => async (dispatch) => {
  try {
    dispatch(deleteProfileRequest());
    const response = await axios.delete(`${apiUrl}/users/${userId}/delete-profile`);
    dispatch(deleteProfileSuccess(response.data)); 
  } catch (error) {
    dispatch(deleteProfileFail(error.response.data.errors[0].message));
  }
};
