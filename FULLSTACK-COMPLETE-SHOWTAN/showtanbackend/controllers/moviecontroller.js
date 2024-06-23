const movie = require("../models/moviemodel")
//mainly movie controller will list out our data in adocument format along with an id
const getallmovie = async(req, res) => {
    const movied = await movie.find(req.query).populate('genere');
     res.json(movied)
}
//req.query is used to fetch the query parameters which was given after ?
//.populate is used to send /acess the generes from the front end
//res.json is used to send the response back
const getmoviebyid = async(req, res) => {
    const movied= await movie.findById(req.params.movieId).populate('genere').exec();
    res.json (movied)
}

const addmovie = async(req, res) => {
    //1>get data from request body
     const data= req.body
    //2>create a document
    const movied= new movie(data)
    //3> save document
     await movied.save()
    //4> send the response back
    res.json(movied)
}

const updatemovie = async(req, res) => {
    const movied =await movie.findByIdAndUpdate(req.params.movieId, req.body, {new:true})
    res.json(movied)
}

const deletemovie = async(req, res) => {
    await movie.findOneAndDelete(req.params.movieId)
    res.send(' movie deleted !')
}

module.exports = {
    getallmovie,
    getmoviebyid,
    updatemovie,
    deletemovie,
    addmovie
}