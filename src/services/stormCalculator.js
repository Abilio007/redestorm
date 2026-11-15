const {
  convertSecondsToHours,
} = require("./functions-utilities/secondsToHours");

const upDateStormProgress = (speed, initialDistance, elapsedTime) => {
  if (speed <= 0) {
    throw new Error("The distance must be greater than zero!");
  }

  const elapsedHours = convertSecondsToHours(elapsedTime);
  const distanceTraveled = speed * elapsedHours;
  const remainingDistance = Math.max(0, initialDistance - distanceTraveled);
  const remainingETA = (remainingDistance / speed) * 3600;

  return { remainingDistance, remainingETA };
};

module.exports = { upDateStormProgress };
