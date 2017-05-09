var express = require('express');
var app = express();
// var mongoose = require('mongoose');

// var bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//
// mongoose.connect('mongodb://localhost/songs');


app.use(express.static('public'));
app.use(express.static('node_modules'));

// var Schema = mongoose.Schema;
// var songSchema = new Schema({
//   name: String,
//   notes: Array
// });
//
// var Song = mongoose.model('Song', songSchema);

// app.post("/songs", function(request, response){
//   console.log(request.body);//{title: jhkkjh,notes: [kj,kjkj,lkl]}
//
//   var tune = new Song()//{name: ,notes: }
//   tune.name = request.body.title;
//   tune.notes = request.body.notes;
//
//   tune.save();
//
//   Song.find().exec(function(err, songs){
//     response.send(songs);
//   })
//
//
// })
//
app.listen(8000, function() {
   console.log("Serv's up, brah! 8000");
 });
