const {default :mongoose} = require("mongoose");
const authorschema = new mongoose.Schema({
    name:String,
    image:String,

})

const authmd = mongoose.model("authmd",authorschema);

module.exports = authmd