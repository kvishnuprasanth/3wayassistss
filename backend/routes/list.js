const router = require("express").Router()
const User = require("../models/users")
const ticketsList = require("../models/ticketslist")

router.post("/ticket", async (req,res)=>{
    try {
        const { name,email,contactNo,flatNo, buildingName , street, city , postalCode, issue}=req.body
        const existinguser = await User.findOne({email: req.body.email})
        if(existinguser){
            const newticket = new ticketsList({ name,email,contactNo,flatNo, buildingName , street, city , postalCode, issue,users:existinguser})
            await newticket.save().then(()=>res.status(200).json({newticket}))
            existinguser.TicketsList.push(newticket)
            existinguser.save()
        }
    } catch (error) {
        console.log("error")
    }
})



//delete tickets
router.delete("/deleteticket/:id", async (req,res)=>{
    try {
        const { email }=req.body
        const existinguser = await User.findOne({email})
        if(existinguser){
            const ticket = await ticketsList.findByIdAndDelete(req.params.id).
            then(()=>res.status(200).json({message: "task deleted"}))
        }
    } catch (error) {
        console.log("error")
    }
})

//gettask
router.get("/gettickets/:id",async (req,res)=>{
    const ticketslist = await ticketsList.find({users:req.params.id}).sort({createdAt : -1})
    if(ticketslist.length!==0){
        res.status(200).json({ticketslist})
    } 
    else {
        res.status(200).json({"message": "No ticket has been raised"})
    }
})


module.exports = router