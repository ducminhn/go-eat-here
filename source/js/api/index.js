import 'es6-promise';
import axios from 'axios';

const DATA_URL = "https://developers.zomato.com/api/v2.1/search?count=20&lat=49.246292&lon=-123.116226&radius=5000";
const USER_KEY = "f7b6334db7c203422f364e4498a59813";

function getZomatoRestaurants() {
  const promise = axios.request({
    url: DATA_URL,
    method: 'get',
    headers: {'user-key': USER_KEY}
  });
  return promise;
}

export default {
  getZomatoRestaurants,
};

