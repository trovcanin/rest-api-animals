const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animal");

router.get("/animal", animalController.getAllAnimal);

//za POSTMAN url
router.post(
  "/animal",
  
  animalController.uploadImg,
  animalController.newAnimal
);

router.get("/animal/:name", animalController.getOneAnimal);

module.exports = router;