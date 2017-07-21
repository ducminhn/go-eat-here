import { Map } from 'immutable';

import {
  SEARCH_RESTAURANTS
} from 'actions/app';

const initialState = {
  restaurants: [{
    name: "Urban Fare",
    location: "ABCD"
  }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESTAURANTS:

      // Run function to fetch zomato data here and return promise to restaurant below.

      return Object.assign({}, state, {
        restaurants: action.payload
      })
      break;
  }
  return state;
}
