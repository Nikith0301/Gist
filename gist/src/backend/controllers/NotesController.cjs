const Notes=require('../models/NoteModel.cjs')

const mongoose= require('mongoose')

const getNotes=async(req,res)=>{
    // const Notes = mongoose.model('Notes', NoteSchema);

    try{
        console.log('finding')
        const info= await Notes.find()
        res.status(200).json(info)
    }
    catch(error){
        console.log(error)
        res.status(400).json({error: error.message})
    }
   
}

const getNote = async (req, res) => {
    // const { id } = req.params//get single note by search by id noyt user
    const user_id = req.user._id
  
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({error: 'No such workout'})
    // }
  
    // const note = await Notes.findById(id)
    const note = await Notes.find({user_id})
  
    if (!note) {
      return res.status(404).json({error: 'No such user Notes'})
    }
    
    res.status(200).json(note)
  }


const createNote=async(req,res)=>{
    const {text}=req.body;
    try{
        const user_id=req.user._id
        const info= await Notes.create({text,user_id})
        res.status(200).json(info)
    }
    catch(error){
        console.log(error)
        res.status(400).json({error: error.message})
    }

}

module.exports={getNote,getNotes,createNote}