import api from 'api';

export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';

export function searchRestaurants(){
  let restaurants = [
    {
      name: "Urban Fare",
      locatoin: "ALSKSLK"
    }
  ];
  return{
    type: SEARCH_RESTAURANTS,
    payload: restaurants
  }
}

// Update
