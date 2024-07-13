const getallauthor = async(req,res)=>{
    res.send("hello world")
}

const getauthorbyid =async(req,res)=>{
    res.send("get by id")
}

const addauthor = async(req,res)=>{
    res.send("add author")
}

const updateauthor =async(req,res)=>{
    res.send("update")
}


const deleteauthor = async(req,res)=>{
    res.send("delet")
}

module.exports={
    getallauthor,
    getauthorbyid,
    addauthor,
    updateauthor,
    deleteauthor
}