const express = require('express');
const axios = require('axios')
const cors = require('cors');
const app = express();
let data ; 

app.use(express.json());
app.use(cors({
    origin : '*'
}));


axios.get('https://data.covid19india.org/v4/min/data.min.json').then(resp => {
    data = resp.data;
});

app.get('/',(req,res)=>{
    res.send(data);
    res.send("corona details..")
}).listen(3001,()=>{
    console.log("server up...");
})

