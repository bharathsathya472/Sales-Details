const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://user:user@cluster0.jywfs.mongodb.net/Sales?retryWrites=true&w=majority',{ useNewUrlParser: true },(err)=>{
    console.log('connected to DB')
})



