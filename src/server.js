const express = require('express')
const routes = require('./routes')
const cors = require('cors')

/*
|\\|LENTAH|\\|
*/

require('./database/index')

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(5555)