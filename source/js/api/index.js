import 'es6-promise';

function testAsync() {
  return new Promise(resolve => {
    setTimeout(() => {
      const date = new Date();
      let seconds = date.getSeconds();
      let minutes = date.getMinutes();

      seconds = seconds < 10 ? `0${ seconds }` : seconds;
      minutes = minutes < 10 ? `0${ minutes }` : minutes;
      console.log('test');
      resolve(`Current time: ${ date.getHours() }:${ minutes }:${ seconds }`);
    }, (Math.random() * 1000) + 1000); // 1-2 seconds delay
  });
}

function getZomatoRestaurants() {
  return new Promise(resolve => {
    // set up zomato client
    var zomato = require("zomato")
    var client = zomato.createClient({
      userKey: 'f7b6334db7c203422f364e4498a59813',
    });

    // TODO Feed in LAT LONG

    client.search({
      lat: "49.246292", //latitude
      lon: "-123.116226", //longitude
      count: "20", // number of maximum result to display
      start: "1", //fetch results after offset
      radius: "10000", //radius around (lat,lon); to define search area, defined in meters(M)
      sort: "real_distance", //choose any one out of these available choices
      // sort: " cost,rating,real_distance" , //choose any one out of these available choices
      order: "asc" //	used with 'sort' parameter to define ascending(asc )/ descending(desc)
      }, function(err, result){
          if(!err){
            console.log(result);
          }else {
            console.log(err);
          }
    });
  });
}

export default {
  testAsync,
  getZomatoRestaurants,
};

