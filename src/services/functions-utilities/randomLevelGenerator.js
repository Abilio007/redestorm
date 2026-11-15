const random = require("./randomRange");

const generateRandomLevel = () => {
  return random.randomRange(1, 5);
};

module.exports = { generateRandomLevel };
