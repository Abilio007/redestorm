const crypto = require("crypto");

const generateStormId = () => {
    return `RS-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
};

module.exports = { generateStormId };