const mongoose = require('mongoose');

const dataTosave = new mongoose.Schema({
    name:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('Model',dataTosave)