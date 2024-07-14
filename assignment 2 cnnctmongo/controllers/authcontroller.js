const authmd = require('../models/authormodel')

const getallauthor = async(req,res)=>{
    const authres = await authmd.find();
    res.json(authres)
}

const getauthorbyid =async(req,res)=>{
    const aurhres =await authmd.findById(req.params.authorId).exec();
    res.json(aurhres)
}

const addauthor = async(req,res)=>{
    const audetail = req.body
    const authres = new authmd(audetail)
    await authres.save()
    res.json(authres)
}

const updateauthor =async(req,res)=>{
    const authres =await authmd.findByIdAndUpdate(req.params.authorId,req.body,{new : true});
    res.json(authres)
}


const deleteauthor = async(req,res)=>{
    await authmd.findByIdAndDelete(req.params.authorId);
    res.send(" author deleted")
}


module.exports={
    getallauthor,
    getauthorbyid,
    addauthor,
    updateauthor,
    deleteauthor
}