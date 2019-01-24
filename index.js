'use strict'


const express = require('express')
const app = express()
const port = process.env.PORT || 3001


app.get('/api/product/:productId', (req, res )=>{
   console.log({message:"hola mundo"})
})