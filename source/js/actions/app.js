import api from '../api';

export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';

export function searchRestaurants(){
  const promise = api.getZomatoRestaurants();
  return{
    type: SEARCH_RESTAURANTS,
    payload: promise
  }
}

// Update
