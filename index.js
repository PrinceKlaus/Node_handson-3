const express=require('express')
const dummyData=require('./dummyData')
// const auth=require('./middleware/auth')
const cors=require('cors')
const blogRouter = require('./Routes/blogRouter')
const app=express()
app.use(cors({
    origin:"*"
}))
const middleware1=(req,res,next)=>{
    const age = 19;
    if(age>18){
        next()
    }
    else{
        res.send("Permission denied due to age restriction")
    }
}

app.use(middleware1) // global middleware
app.use('/api',blogRouter)

app.get('/',(req,res)=>{
    console.log("This is Home page")
    res.send("API is running fine")
})

app.listen(4002,()=>{
    try{
        console.log("server is live at port number 4002")
    }
    catch(err){
        console.log(err,"An error occurred")
    }
})

