const mongoose = require('mongoose')
require('./connect')

const godowns = mongoose.Schema({
    name : String,
    total_sales: Number,
    target_sales : Number,
    percent : Number,
    next: Array
})

module.exports = mongoose.model('godowns',godowns)