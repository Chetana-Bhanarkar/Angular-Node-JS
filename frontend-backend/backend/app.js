const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
let data ;


axios.get('https://api.rootnet.in/covid19-in/stats/latest').then(resp => {
    data = resp.data;
});

app.use(express.json())
app.use(cors({
    origin : "*"
}))

app.get('/',(req,res)=>{
    res.send(data);
})

app.listen(4020,()=>{
    console.log("listen on port 4020");
})
