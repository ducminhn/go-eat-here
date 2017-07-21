import { Map } from 'immutable';
import api from '../api';

import {
  SEARCH_RESTAURANTS,
  SELECT_CATEGORY
} from 'actions/app';

const initialState = {
  restaurants: [],
  selected_category: '',
  categories: [
    'Pub Grub',
    'Raw (Fresh)',
    'Bourgeois',
    'Adventurous',
    'Fiesta',
    'Chop Sticks',
    'Nibbles & Pick Me Ups',
    'Eurorail'
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SEARCH_RESTAURANTS:
      return Object.assign({}, state, {
        restaurants: state.restaurants.concat(action.payload.data.restaurants)
      })
      break;

    case SELECT_CATEGORY:
      return Object.assign({}, state, {
        selected_category: action.payload
      })
      break;
  }
  return state;
}
