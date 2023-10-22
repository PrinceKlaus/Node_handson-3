const { bollywood, hollywood, technology, fitness } = require("../dummyData")

const bollywoodController =(req,res)=>{
    return res.send(bollywood)
}

const hollywoodController=(req,res)=>{
    return res.send(hollywood)
}

const technologyController=(req,res)=>{
    return res.send(technology)
}

const fitnessController=(req,res)=>{
    return res.send(fitness)
}

const foodController=(req,res)=>{
    return res.send(food)
}

module.exports={bollywoodController,hollywoodController,technologyController,fitnessController,foodController}