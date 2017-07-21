import { Map } from 'immutable';
import api from '../api';

import {
  SEARCH_RESTAURANTS
} from 'actions/app';

const initialState = {
  restaurants: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESTAURANTS:
      console.log(action.payload);
      return Object.assign({}, state, {
        restaurants: action.payload.data
      })
      break;
  }
  return state;
}
