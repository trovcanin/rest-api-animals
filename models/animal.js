const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  common_name:{type:String, required:true},
  image:String,
  scientific_name:String,
  type:String,
  diet:String,
  life_span:String,
  size:String,
  weight:String
},{ collection: 'animals' })

const Animal = mongoose.model('Animals', AnimalSchema);
module.exports = Animal;

