import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/locations')
    .then(res => dispatch({
      type: GET_ITEMS,
      payload: res.data
    }))
    .catch();
};

export const addItem = item => dispatch => {
  axios
    .post('/api/locations', item)
    .then(res => dispatch({
      type: ADD_ITEM,
      payload: res.data
    }))
    .catch();
};

export const deleteItem = id => dispatch => {
  axios
    .delete(`/api/locations/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch();
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}