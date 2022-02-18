const Express = require("express");
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { OcModel } = require("../models");

// router.get("/practice", validateJWT, (req, res) => {
//     res.send("practiceeee")
// });

/*
==========================
        OC Create
==========================
*/
router.post("/create", validateJWT, async (req, res) => {
    const { name, age, pronouns, likes, dislikes, bio } = req.body.oc;
    const { id } = req.user;
    const ocCreation = {
        name,
        age,
        pronouns,
        likes,
        dislikes,
        bio,
        owner: id
    }
    try {
        const newOc = await OcModel.create(ocCreation);
        res.status(200).json(newOc);
    } catch (err) {
        res.status(500).json({ error: err });
    }
    OcModel.create(ocCreation)

});



module.exports = router;