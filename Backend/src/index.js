const express=require("express");
const app=express();
const cors=require("cors");
const {connection}=require("./config/db");
const { userrouter } = require("./features/Users/user.route");
app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use("/user",userrouter)
app.listen(8080,async()=>{
    try
    {
        await connection
        console.log("conneted to db");

    }
    catch(err)
    {
        console.log(err)
    }
    console.log(`8080 port working fine`)
})