const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const factories = require('./model/factories')
const companies = require('./model/companies')
const godowns = require('./model/godowns')
const postPath = require('./routes/PostRoutes/post.js')
const getPath = require('./routes/GetRoutes/get.js')


//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/posts',postPath)
app.use('/',getPath)
//create Schema

app.listen(3000);

