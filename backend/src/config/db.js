
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("database connect successfully");
    }catch(error){
        console.log(error);
    }
}
module.exports=connectDB;