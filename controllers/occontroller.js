const Express = require("express");
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");

router.get("/practice", validateJWT, (req, res) => {
    res.send("practiceeee")
});

module.exports = router;