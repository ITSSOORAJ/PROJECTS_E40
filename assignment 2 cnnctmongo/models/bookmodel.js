const {default :mongoose} = require("mongoose");
const bookschema = new mongoose.Schema({
    title:String,
    coverpage:String,
    theme:String,

})

const bookmd = mongoose.model("bookmd",bookschema);

module.exports = bookmd