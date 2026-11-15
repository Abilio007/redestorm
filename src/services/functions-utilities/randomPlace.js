const locations = require("../../data/locations");
const rd = require("./randomRange");

const randomStormSpotGenerator = ()=>{
    const locationIndex = rd.randomRange(0, 9);

    const placeDetails = locations[locationIndex];
    const place = {
        "place_name": placeDetails.name,
        "latitude": placeDetails.lat,
        "longitude": placeDetails.lon,
    };

    return place;
}

module.exports = { randomStormSpotGenerator };