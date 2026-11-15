const rd = require("./randomRange");
const { generateRandomLevel } = require("./randomLevelGenerator");
const { convertSecondsToHours } = require("./secondsToHours");

const stormProprietiesValueGenerator = () => {
  const LEVEL = generateRandomLevel();

  const visibilityRanges = {
    1: [80, 100],
    2: [60, 79],
    3: [35, 59],
    4: [15, 34],
    5: [0, 14],
  };

  const [min, max] = visibilityRanges[LEVEL];

  const visibility = rd.randomRange(min, max);

  const severityLevels = {
    1: "low",
    2: "moderate",
    3: "high",
    4: "severe",
    5: "extreme",
  };

  const severity = severityLevels[LEVEL];

  const speed = rd.randomRange(10, 120);
  const direction = rd.randomRange(0, 359);
  const duration = rd.randomRange(3600, 172800);
  const distance = rd.randomRange(1000, 5000);

  const eta = (distance / speed) * 3600;

  let risk;

  if (LEVEL >= 4 && eta <= 3600) {
    risk = "critical";
  } else if (LEVEL >= 3 && eta <= 10800) {
    risk = "high";
  } else if (LEVEL >= 2 && eta <= 21600) {
    risk = "medium";
  } else {
    risk = "low";
  }

  const etaHours = convertSecondsToHours(eta);

  if (severity === "extreme") {
    risk = "critical";
  } else if (severity === "severe" && etaHours <= 3) {
    risk = "critical";
  } else if (severity === "severe" && etaHours > 3) {
    risk = "high";
  } else if (severity === "moderate" && etaHours <= 6) {
    risk = "medium";
  } else {
    risk = "low";
  }

  const stormValues = {
    speed: speed,
    level: LEVEL,
    visibility: visibility,
    direction: direction,
    duration: duration,
    distance: distance,
    eta: Math.ceil(eta),
    severity: severity,
    risk: risk,
  };

  return stormValues;
};

module.exports = { stormProprietiesValueGenerator };
