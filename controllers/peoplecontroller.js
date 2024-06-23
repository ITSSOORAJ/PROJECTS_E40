const people = require("../models/peoplemodel")

const getallpeople = async(req, res) => {
     const peoples = await people.find({});
     res.json(peoples)
}


const getpeoplebyid = async (req, res) => {
   const peoples= await people.findById(req.params.peopleId).exec();
    res.json (peoples)
}

const addpeople = async (req, res) => {
    //1> get data from request body
     const data = req.body
     //2> create a document
     const peoples = new people(data)
     console.log(peoples)
     //3> ssave document
     await peoples.save()
    res.json(peoples)
}

const updatepeople = async(req, res) => {
    const peoples =await peopole.findByIdAndUpdate(req.params.peopleId, req.body, {new:true})
    res.json(peoples)
}

const deletepeople = async(req, res) => {
    await people.findOneAndDelete(req.params.peopleId)
    res.send('deleted!')
}

module.exports = {
    getallpeople,
    getpeoplebyid,
    updatepeople,
    deletepeople,
    addpeople
}