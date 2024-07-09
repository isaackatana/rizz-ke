const express = require('express')
const app = express()

const admins = require('./user')

app.get('/', (req, res) =>{
    res.render('index.ejs')
})

app.get('/api/user', (req, res) =>{
    res.send(admins)

    
})

const port = process.env.PORT || 5172

app.listen(port,()=>{
    console.log(`Server is at http://localhost:${port}`)
})