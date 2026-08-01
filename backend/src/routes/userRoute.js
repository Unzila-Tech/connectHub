const express=require("express");
const router=express.Router();

const { 
    getProfile,
    updateProfile,
    getAllUsers,  
} =require("../controllers/userController");

router.get("/",getAllUsers);
router.get("/:id",getProfile);
router.put("/:id",updateProfile);

module.exports=router;