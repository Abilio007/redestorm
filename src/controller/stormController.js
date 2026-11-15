const { engine } = require("../stormInstance");

const fetchForStorm = (req, res) => {
  try {
    const currentStorm = engine.getCurrentStorm();

    if (!currentStorm) return res.status(404).json({ message: "No storms around!" });

    return res
      .status(200)
      .json({ message: "Storm detected!", data: currentStorm });
  } catch (error) {
    console.error("Catch fail: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error. Server is offline!" });
  }
};

module.exports = { fetchForStorm };
