//Required dependencies
require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const app = express()
const PORT = process.env.PORT || 4000
const {CONNECTION_STRING} = process.env
const ctrl = require('./controller')

//Used dependencies
app.use(json())

//DB connection
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    app.status(500).send(`Something went wrong with the connection: ${err}`)
})

//endpoints:

app.get('/api/houses', ctrl.getProperties)
app.post('/api/house', ctrl.addProperty)
app.delete('/api/house/:id', ctrl.deleteProperty)

//PORT CONNECTION
app.listen(PORT, ()=> console.log(`Live at ${PORT}`))


// SQL alter steps:

//  ADDING DESIRE MORTGAGE ---------------
// alter table properties
// add mortgage_amount numeric(8,2)

//  ADDING DESIRE AMOUNT COLUMN ---------------
// alter table properties
// add desire_rent numeric(8,2)

//  ADDING IMAGE COLUMN ---------------
// alter table properties
// add img_url varchar(255)
