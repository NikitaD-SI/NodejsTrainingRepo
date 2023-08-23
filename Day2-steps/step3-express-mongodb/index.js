const express = require("express");
const mongoose = require("mongoose");
const config = require("./config.json");
 
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
 
// Model 
let User = mongoose.model("User", new Schema({
    id : ObjectId,
    Title : String,
    power : String
}));
let dburl ="mongodb+srv:mongodb+srv://admin:XXTSCy598KgZuCqn@cluster0.2t5vt0v.mongodb.net/Sportz?retryWrites=true&w=majority"
mongoose.connect(dburl)
.then( res => console.log("DB Connected"))
.catch( err => console.log("Error", err))
//-------------------------------------------------
 
setTimeout(function(){
    User.find().then(res => console.log("Records ", res) )
    
},2000)
 
const app = express();
 
app.listen(config.port, config.host);
 
console.log("server is now live on ",config.host, config.port);