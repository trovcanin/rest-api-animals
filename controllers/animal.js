const Animal = require("../models/animal");
const multer = require("multer");

//upload Image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("image");

//POST animal
const newAnimal = (req, res) => {
  //check if animal already exists in db
  Animal.findOne({ name: req.body.name }, (data) => {
    //if animal not in db, add it
    if (data === null) {
      const newAnimal = new Animal({
        common_name: req.body.common_name,
        image: req.file.path,
        scientific_name: req.body.scientific_name,
        type: req.body.type,
        diet: req.body.diet,
        life_span: req.body.life_span,
        size: req.body.size,
        weight:req.body.weight
      });

      // save to database
      newAnimal.save((err, data) => {
        if (err) return res.json("Something is wrong. Please check.");
        return res.json(data);
      });
    } else {
      return res.json(`${name} animal already exists.`);
    }
  });
};

//GET all animals
const getAllAnimal = (req, res) => {
  Animal.find({}, (err, data) => {
    if (err) {
      return res.json("Something is wrong. Please contact admin.");
    }
    return res.json(data);
  });
};

//GET 1 animal
const getOneAnimal = (req, res) => {
  let name = req.params.name;
  Animal.findOne({ common_name: name }, (err, data) => {
    if (err || !data) {
      return res.json(`Cannot find the ${name} ...`);
    } else return res.json(data);
  });
};


//export controller
module.exports = {
  getAllAnimal,
  uploadImg,
  newAnimal,
  //deleteAllTea,
  getOneAnimal,
  //newComment,
  //deleteOneTea,
  
};