const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/regs",{useNewUrlParser:true,
useUnifiedTopology:true

}).then(()=>{
    console.log(`Connection succesfull bc thapa`);
}).catch((e)=>{
    console.log("Kat diya bhai:"+e);
})