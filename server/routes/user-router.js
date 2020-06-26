const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/register', UserCtrl.createUser)
router.put('/update/:id', UserCtrl.updateUser)
router.delete('/delete/:id', UserCtrl.deleteUser)
router.get('/get/:id', UserCtrl.getUserById)
router.get('/getAll', UserCtrl.getUsers)

module.exports = router