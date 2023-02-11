// const express = require("express")
import express from "express"
import mongoose from "mongoose"
// const mongoose = require('mongoose')
import Messages from "./dbMessages.js"

const app = express();
const port = process.env.PORT || 9000

app.use(express.json())

const connection_url = 'mongodb+srv://sibansu:sibansu@cluster0.3tnk7jt.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.connect(connection_url);

app.get('/',(req,res)=>res.status(200).send("Hello world"));

app.get('/messages/sync',(req, res)=>{
    Messages.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

app.post('/messages/new', (req,res)=>{
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.listen(port,()=>console.log(`Listening on localhost:${port}`))