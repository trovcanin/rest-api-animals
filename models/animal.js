const mongoose = require("mongoose");

// const TeaSchema = new mongoose.Schema({
//     name: {type:String, required:true},
//     image: String,
//     description: String,
//     keywords: String,
//     origin: String,
//     brew_time: Number,
//     temperature: Number,
//     comments: [{ text: String, date: {type:String, default: new Date()} }]
// });

// const Tea = mongoose.model('Tea', TeaSchema);

// module.exports = Tea;

//------

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

