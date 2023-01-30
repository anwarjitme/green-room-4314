const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb+srv://vivek:vivek@cluster0.vicdmss.mongodb.net/?retryWrites=true&w=majority");
module.exports={
  connection
}