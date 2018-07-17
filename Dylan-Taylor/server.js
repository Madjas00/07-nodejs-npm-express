'use strict';

//Done: Finish out the server code according to the instructions in the lab README

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.get('/articles', (req,res)=>{
  res.sendFile('public/data/hackerIpsum.json', { root: '.'});
});

app.get('/', (req,res)=>{
  res.status(201).sendFile('public/index.html', { root: '.'});
});

app.get('/new', (req,res)=>{
  res.status(201).sendFile('public/new.html', {root: '.'});
});

app.get('*', (req,res)=> {
  res.status(404).send('Not found');
  //res.sendfile('new.html', { root: './public'});
});

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.listen(PORT, ()=> {
  console.log('I am a server');
});