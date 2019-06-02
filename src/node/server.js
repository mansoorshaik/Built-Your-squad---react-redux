const  express = require('express');
const app=express();
const cors = require('cors');
const bodyParser = require ('body-parser');

const recepi=require('../api/recepi');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const port= 5000;

app.use('/api', recepi);

app.listen(port, () => 
    console.log(`port is ruinning at ${port}`));


