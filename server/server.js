const express = require('express')
const cheerio = require('cheerio')
const ctrl = require('./controller')

const app = express()
const PORT = 5432

app.use(express.json())


//endpoints
app.post('/api/websiteInput', ctrl.websiteInput)


app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))
