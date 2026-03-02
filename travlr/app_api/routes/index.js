const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router.get("/test", (req, res) => {
    res.status(200).json({ message: "API router works" });
});

router
    .route('/trips')
    .get(tripsController.tripsList) //GET Method  tripList
    .post(tripsController.tripsAddTrip); //POST Method Adds a Trip


//GET Method routes tripsFindByCode
//PUT Method routees tripsUpdateTrip
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
