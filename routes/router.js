const express = require('express')
const userController = require('../controllers/userController')
const projectController = require ('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddileware')


const router = new express.Router()
// register
router.post('/register',userController.registerController)
// login
router.post('/login',userController.loginController)

// add project
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.addProjectController)

// homeproject
router.get('/home-project',projectController.homePageProjectController)

router.get('/all-projects',jwtMiddleware,projectController.allProjectController)

// user-projects
router.get('/user-projects',jwtMiddleware,projectController.userProjectController)

// projects/10/edit
router.put('/projects/:id/edit',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.editProjectController)

// projects/id/remove
router.delete('/projects/:id/remove',jwtMiddleware,projectController.removeProjectController)

// edit-user
router.put('/edit-user',jwtMiddleware,multerMiddleware.single('profilePic'),userController.editUserController)










module.exports = router