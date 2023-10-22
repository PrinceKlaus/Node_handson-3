const { bollywoodController, hollywoodController, technologyController, fitnessController, foodController } = require('../Controller/controllerFunction')
const auth = require('../middleware/auth')

const blogRouter =require('express').Router()
blogRouter.get("/bollywood",auth,bollywoodController)  // middleware on specific routes
blogRouter.get("/hollywood",auth,hollywoodController)  // middleware on specific routes
blogRouter.get("/technology",technologyController)
blogRouter.get("/fitness",fitnessController)
blogRouter.get("/food",foodController)

module.exports=blogRouter;