const express = require('express')
const app = express()
const port = 3000;


app.get('/healthcheck' ,(req,res) => {
    res.send('Health check passed');
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})