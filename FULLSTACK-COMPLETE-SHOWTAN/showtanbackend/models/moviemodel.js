const {default : mongoose} = require("mongoose");
const movieschema = new mongoose.Schema({
    title: String,
    thumbnail:String,
    language:String,
    description:String,
    genere : {
      type: mongoose.ObjectId,
      ref:'generee'
    }

  });

  const movie = mongoose.model('movie', movieschema);

  module.exports =movie 