const mongoose=require("mongoos");
const { model } = require("mongoose");

const postSchema=new mongoose.Schema({
     
    auther:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"user",
         required:true
    },
    text:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    video:{
        type:String
    },

    likes:[
        {
           type:mongoose.Schema.Types.ObjectId,
           ref:"user"
        }
    ],

    comments:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }
],
timeStamp:true

});

module.exports= mongoose.model("post",postSchema);