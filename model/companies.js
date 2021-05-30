const mongoose = require('mongoose')
require('./connect')

const companies = mongoose.Schema({
    name : String,
    total_sales: Number,
    target_sales : Number,
    percent : Number,
    next: Array
})

module.exports = mongoose.model('companies',companies)


