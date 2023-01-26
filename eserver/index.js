
// import express
const express= require('express')
// import cors
const cors=require('cors')
// import dataService
const dataService=require('./services/dataService')
// app create
const app= express()
//to parse json
app.use(express.json())
//set up port number
app.listen(3000,()=>{
    console.log('ok');
})
app.use(cors({
    origin:'http://localhost:4200'
}))
// api to add all products
app.get('/all-products',(req,res)=>{
    dataService.getproducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// api to  get wishlist
app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.images,req.body.description).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
)
})
// get wishlist
app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// api to delete wishlist
app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
// register
app.post('/register',(req,res)=>{
    console.log(req.body);
dataService.register(req.body.username,req.body.password,req.body.mobilenumber)
.then(result=>{
    res.status(result.statusCode).json(result)
})
})
// login
app.post('/login',(req,res)=>{
    console.log(req.body);
 dataService.login(req.body.username,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)

    })
    })