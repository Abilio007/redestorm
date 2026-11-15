const { stormProprietiesValueGenerator } = require("./functions-utilities/stormPropValGenerator");
const { randomStormSpotGenerator } = require("./functions-utilities/randomPlace");
const { generateStormId } = require("./functions-utilities/stormIDgenerator");

const stormGenerator = () => {
  const stormValues = stormProprietiesValueGenerator();
  const SpotPlace = randomStormSpotGenerator();
  const stormID = generateStormId();

  const storm = {
    id: stormID,
    name: "REDSTORM ALPHA",
    status: "approaching",

    origin: {
      latitude: -14.5,
      longitude: 125.2,
    },

    movement: {
      direction: stormValues.direction,
      speed: stormValues.speed,
    },

    intensity: {
      level: stormValues.level,
      visibility: stormValues.visibility,
      severity: stormValues.severity,
    },

    progress: {
      estimatedArrival: stormValues.eta,
      elapsedTime: 0,
      duration: stormValues.duration,
    },

    affectedAreas: [
      {
        name: SpotPlace.place_name,
        distance: stormValues.distance,
        eta: stormValues.eta,
        risk: stormValues.risk,
      },
    ],

    updatedAt: null,
  };

  return storm;
};

module.exports = { stormGenerator };
