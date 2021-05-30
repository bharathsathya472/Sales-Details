const express = require('express')
const companies = require('../../model/companies')
const factories = require('../../model/factories')
const godowns = require('../../model/godowns')
const router = express.Router()

router.patch('parent/:company/:factory?/:godown?',async (req,res)=>{
    const result = {}
    result['company'] = {'total_sales':companies.find({name:req.params.company}).find({total_sales:1}),'target_sales':companies.find({name:req.params.company}).find({target_sales:1})}
    if (req.params.factory)
        result['factory'] = {'total_sales':factories.find({name:req.params.factory}).find({total_sales:1}),'target_sales':factories.find({name:req.params.factories}).find({target_sales:1})}
    if (req.params.godown)
        result['godown'] = {'total_sales':godowns.find({name:req.params.factory}).find({total_sales:1}),'target_sales':godowns.find({name:req.params.factories}).find({target_sales:1})}
    res.json(result)
})

module.exports = router