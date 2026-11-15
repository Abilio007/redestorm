const convertSecondsToHours = (sec) => {
  const BASEANHOUR = 3600;

  return sec / BASEANHOUR;
};

module.exports = { convertSecondsToHours };
