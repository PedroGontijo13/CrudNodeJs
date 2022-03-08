const express = require('express')
const routes = require('./routes')

/*
|\\|LENTAH|\\|
*/

require('./database/index')

const app = express()

app.use(express.json())

app.use(routes)

app.listen(5555)