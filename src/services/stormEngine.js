const { stormGenerator } = require("./stormGenerator");
const { upDateStormProgress } = require("./stormCalculator");

const stormEngine = () => {
  const storm = stormGenerator();

  const initialDistance = storm.affectedAreas[0].distance;
  let elapsedTime = 0;

  const getCurrentStorm = () => storm;

  const update = (deltaSeconds) => {
    elapsedTime += deltaSeconds;

    const progress = upDateStormProgress(
      storm.movement.speed,
      initialDistance,
      elapsedTime,
    );

    storm.progress.elapsedTime = elapsedTime;
    storm.progress.estimatedArrival = progress.remainingETA;

    storm.affectedAreas[0].distance = progress.remainingDistance;
    storm.affectedAreas[0].eta = progress.remainingETA;

    if (progress.remainingDistance === 0) {
      storm.status = "arrived";
    }
    if(elapsedTime <= storm.progress.duration){
      storm.status = "dissipated";
    }

    storm.updatedAt = new Date().toISOString();

    return storm;
  };

  return {
    getCurrentStorm,
    update,
  };
};

module.exports = { stormEngine };
