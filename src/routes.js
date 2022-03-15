const express= require('express')
const UserController = require('./controllers/UserControllers')

const routes = express.Router()


routes.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
})
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.store)

module.exports = routes