const express = require('express');
const app = express();
const port = process.env.PORT;
const multer = require('multer');
const routes = require('./routes/animal')
const path = require('path');



const mongoose = require('mongoose');

//establish connection to database
mongoose.connect(
    'mongodb+srv://tariktarik:tarik1234@cluster0.ccbvw.mongodb.net/REST-API?retryWrites=true&w=majority',
    { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

//Our 'uploads' folder cannot be accessed publicly and therefore the //server cannot GET our image. To fix this, we have to make our //uploads folder a static file.
app.use('/uploads', express.static('./uploads'));



app.use('/uploads', express.static('./uploads'));

//MULTER STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
app.use(express.json()); // parses incoming requests with JSON payloads
//INITIALIZING MULTER
const uploadImg = multer({storage: storage}).single('image');

app.use('/', routes);


//Download ANIMAL
//------------------------------------------------------------
// app.get('/animal-download', function (req, res) {
//     var file = path.join(__dirname + '/uploads', 'koala.jpg');
//     res.download(file, function (err) {
//         if (err) {
//             console.log('jebi se')
//         } else {
//             console.log("Hvala sto ste skinuli sliku zivotinje!");
//         }
//     });
//  });
//------------------------------------------------------------

app.get('/download/:ime', (request, response) => {
    //let file = path.join(__dirname + '/uploads', `${request.params.ime}` + '.jpg')
    let file = path.join(__dirname + '/uploads', `${request.params.ime}`)
  // console.log(path + request.params.ime)
  console.log(file)
    response.download(file, function(err) {
      if(err) {
        console.log('Ne moze debilu!')
      } else {
        console.log('Upjelo JEEEEEEEEE!')
      }
    })
    
    //end response?
    
    //response.json({echo : request.params.word})
  })


let server = app.listen(()=> {
  console.log('Server running on port --> ' + server.address().port)
})