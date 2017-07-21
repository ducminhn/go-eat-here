import api from '../api';

export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';

export function searchRestaurants(offset, latitude, longitude){
  const promise = api.getZomatoRestaurants(offset, latitude, longitude);
  return{
    type: SEARCH_RESTAURANTS,
    payload: promise
  }
}

// Update
