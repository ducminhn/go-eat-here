import api from '../api';

export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';

export function searchRestaurants(offset){
  const promise = api.getZomatoRestaurants(offset);
  return{
    type: SEARCH_RESTAURANTS,
    payload: promise
  }
}

// Update
