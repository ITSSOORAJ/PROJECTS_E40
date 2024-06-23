const generee = require("../models/generemodel")

const getallgenere = async(req, res) => {
     const generes = await generee.find({});
     res.json(generes)
}


const getgenerebyid = async (req, res) => {
   const generes= await generee.findById(req.params.genereId).exec();
    res.json (generes)
}

const addgenere = async (req, res) => {
    //1> get data from request body
     const data = req.body
     //2> create a document
     const genere = new generee(data)
     console.log(genere)
     //3> ssave document
     await genere.save()
    res.json(genere)
}

const updategenere = async(req, res) => {
    const genere =await generee.findByIdAndUpdate(req.params.genereId, req.body, {new:true})
    res.json(genere)
}

const deletegenere = async(req, res) => {
    await generee.findOneAndDelete(req.params.genereId)
    res.send('Hello World!')
}

module.exports = {
    getallgenere,
    getgenerebyid,
    updategenere,
    deletegenere,
    addgenere
}