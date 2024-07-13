const getallbook = async(req,res)=>{
    res.send("hello world")
}

const getbookbyid =async(req,res)=>{
    res.send("get by id")
}

const addbook = async(req,res)=>{
    res.send("add book")
}

const updatebook =async(req,res)=>{
    res.send("update")
}


const deletebook = async(req,res)=>{
    res.send("delet")
}

module.exports={
    getallbook,
    getbookbyid,
    addbook,
    updatebook,
    deletebook
}