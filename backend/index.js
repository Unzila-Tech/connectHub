const express=require("express");
const dotenv =require("dotenv");
const cors=require("cors");
const connectDB=require("./src/config/db");
//const becrypt=require("becrypt");
dotenv.config();
const app=express();

connectDB();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
     res.send("connection built");
});

let PORT=7070;
app.listen(PORT,()=>{
    console.log("app listening");
})

 
