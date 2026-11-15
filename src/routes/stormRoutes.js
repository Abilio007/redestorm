const router = require("./Route");
const stormController = require("../controller/stormController");

router.get("/api/v1/storm", stormController.fetchForStorm);

module.exports = router;