const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/regs",{useNewUrlParser:true,
useUnifiedTopology:true

}).then(()=>{
    console.log(`Connection succesfull Eastablished`);
}).catch((e)=>{
    console.log("Kat diya bhai:"+e);
})
