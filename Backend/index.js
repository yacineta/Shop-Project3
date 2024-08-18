const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());



mongoose.connect("mongodb+srv://.r3yiabq.mongodb.net/ ");

app.get("/",(req,res)=>{
    res.send("Exoress App is Running");

})

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`  )

    }
})

const upload = multer({storage:storage})

app.use('/images',express.static('upload/images'));
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        reuired:true,
    }
})

app.listen(port,(error)=>{
    if(!error){
         console.log("Server is runnig in Port")
    }
    else{
        console.log('Error:',error);
    }
   
})