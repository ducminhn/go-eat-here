import api from '../api';

export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export function searchRestaurants(offset, latitude, longitude){
  const promise = api.getZomatoRestaurants(offset, latitude, longitude);
  return{
    type: SEARCH_RESTAURANTS,
    payload: promise
  }
}

export function selectCategory(category){
  return{
    type: SELECT_CATEGORY,
    payload: category
  }
}