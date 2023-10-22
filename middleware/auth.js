const auth=(req,res,next)=>{
    console.log('Auth middleware')

const age = 20;
if(age>18){
    next()
}
else{
    res.send("Permission denied due to age restriction")
}
}

module.exports=auth;