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

      return Object.assign({}, state, {
        restaurants: state.restaurants.concat(action.payload.data.restaurants)
      })
      break;
  }
  return state;
}
