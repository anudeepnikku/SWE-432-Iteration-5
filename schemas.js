const mongoose=require("mongoose");
var songs=new mongoose.Schema({
        name: String,
        artist: String,
        duration: Number,
        genre: String,
});

var currentShowInformation=new mongoose.Schema({
        name: String,
        time: String,
        duration: Number,
});

var timeslot=new mongoose.Schema({
        time: String,
});


