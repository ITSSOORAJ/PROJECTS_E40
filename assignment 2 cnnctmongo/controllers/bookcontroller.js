const bookmd = require("../models/bookmodel")

const getallbook = async(req,res)=>{
    const bookres = await bookmd.find();
    res.json(bookres)
}

const getbookbyid =async(req,res)=>{
    const bookres =await bookmd.findById(req.params.bookId).exec();
    res.json(bookres)
}

const addbook = async(req,res)=>{
    const bdetail = req.body
    const bookres = new bookmd(bdetail)
    await bookres.save()
    res.json(bookres)
}

const updatebook =async(req,res)=>{
    const bookres =await bookmd.findByIdAndUpdate(req.params.bookId,req.body,{new : true});
    res.json(bookres)
}


const deletebook = async(req,res)=>{
    await bookmd.findByIdAndDelete(req.params.bookId);
    res.send("book deleted")
}

module.exports={
    getallbook,
    getbookbyid,
    addbook,
    updatebook,
    deletebook
}