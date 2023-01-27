const express=require("express");
const userrouter=express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { signupmodel } = require("../Users/user.model");

userrouter.post("/register",async(req,res)=>{
  const {
    email,
    password,
    first_name,
    last_name,
    phone_number,
    company_name,
    website_URL,
    employees,
    avtar,
  } = req.body;
    {
        try
        {
            bcrypt.hash(password, 5, async(err, secure_password)=> {
                if(err)
                {
                    //console.log(err);
                }
                else
                {
                    let postregister=new signupmodel({
                      email,
                      password:secure_password,
                      first_name,
                      last_name,
                      phone_number,
                      company_name,
                      website_URL,
                      employees,
                      avtar,
                    });
                    await postregister.save();
                    console.log(postregister);
                    res.send("register");
                }
            });
        }
        catch(err)
        {
            console.log(err);
            console.log("user alredy exixts")
        }
    }
})
userrouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const postlogin=await signupmodel.find({email});
        if(postlogin.length>0)
        {
            bcrypt.compare(password, postlogin[0].password, function(err, result) {
                
                if(result)
                {
                    const token=jwt.sign({ foo: 'bar' }, 'masai');
                    res.send({"msg":"login sucessfully","token":token})
                }
                else{
                    console.log("wrong data")
                }
            });
        }
        else
        {
            console.log("worng data you enter");
        }

    }
    catch(err)
    {
        console.log(err);
    }
})
module.exports={
    userrouter
}