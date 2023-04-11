const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.get('/',(req,res)=>{
res.send('Hi All');
})

app.get('/data',(req,res)=>{
    var data = ['Ali beik','Georgio','Ahmad','Rym']
    res.send(data);
    })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});