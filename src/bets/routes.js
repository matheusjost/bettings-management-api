const { Router } = require('express');
const controller = require('./controller')

const router = Router();

// setting up the routes and methods for the api calls
router.get("/", controller.getBets);
router.post("/", controller.addBet);
router.get("/:id", controller.getBetByID);
router.delete("/:id", controller.deleteBet);
router.put("/:id", controller.updateBet);

module.exports = router;