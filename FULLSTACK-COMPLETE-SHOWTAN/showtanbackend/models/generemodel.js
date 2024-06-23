const {default : mongoose} = require("mongoose");

const generechema = new mongoose.Schema({
    title: String,

  });

  const generee = mongoose.model('generee', generechema);

  module.exports =generee