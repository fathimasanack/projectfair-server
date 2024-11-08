const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("mongodb atlas connected successfully with pfserver");
    
}).catch(err=>{
    console.log("mongodb atlas connection failed");
    console.log(err);
    
    
})