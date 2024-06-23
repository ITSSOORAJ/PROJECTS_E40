const {default : mongoose} = require("mongoose");

const peopleschma = new mongoose.Schema({
    name: String,
    occupation:String,
    profile :String,
    about:String

  });

  const people = mongoose.model('people', peopleschma);

  module.exports =people


 