import * as uuid from 'uuid';
import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEMS
} from '../actions/types';

const initialState = {
  items: [
    { id: uuid.v1(), location: '1234,5432' },
    { id: uuid.v1(), location: '8888,5212' },
    { id: uuid.v1(), location: '7772,9871' }    
  ]
};

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    default:
      return state;
  }
}