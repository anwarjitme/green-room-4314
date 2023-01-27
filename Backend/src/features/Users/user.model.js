const mongoose=require("mongoose");
const signupschema=mongoose.Schema(
  {
    email: {
      type: String,
      //require: false,
      //unique: false,
    },
    password: {
      type: String,
     // required: true,
    },
    first_name: {
      type: String,
     // required: true,
    },
    last_name: {
      type: String,
    },
    phone_number: {
      type: Number,
     // required: true,
    },
    company_name: {
      type: String,
     // required: true,
    },
    website_URL: {
      type: String,
     // required: true,
    },
    employees: {
      type: String,
     // required: true,
    },
    avtar: {
      type: String,
      
    }
  }
)
const signupmodel=mongoose.model("hotspotregister",signupschema);
module.exports={
    signupmodel
}