const express = require('express')
const ctrl = require('./controller')

const app = express()
const PORT = 5432

app.use(express.json())


//endpoints
app.post('/api/websiteInput', ctrl.websiteInput)
app.post('/api/websiteInputWithLinks', ctrl.websiteInputWithLinks)


app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))
