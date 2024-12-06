const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
res.send("hi from Unique force technology Solutions")
}

app.listen(port)
console.log("server is running at @3000")