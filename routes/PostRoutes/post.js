const express = require('express')
const companies = require('../../model/companies')
const factories = require('../../model/factories')
const godowns = require('../../model/godowns')
const router = express.Router()

router.post('/company/:name/:tots/:tars',async (req,res)=>{
    const data = new companies({
        name: req.params.name,
        total_sales:req.params.tots,
        target_sales:req.params.tars,
        percent : (req.params.tots/req.params.tars)/100
    })
    data.save()
    res.json(data)
})

router.post('/factory/:name/:tots/:tars',async (req,res)=>{
    const data = new factories({
        name: req.params.name,
        total_sales:req.params.tots,
        target_sales:req.params.tars,
        percent : (req.params.tots/req.params.tars)/100
    })
    data.save()
    res.json(data)
})

router.post('/godown/:name/:tots/:tars',async (req,res)=>{
    const data = new godowns({
        name: req.params.name,
        total_sales:req.params.tots,
        target_sales:req.params.tars,
        percent : (req.params.tots/req.params.tars)/100
    })
    data.save()
    res.json(data)
})

module.exports = router