const jwt = require('jsonwebtoken')
async function authmiddleware(req, res, next){
  const header = req.headers.authorization;
  if(!header){
     return res.status(401).json({
        message:"Tooken missing",
        success:false
     })
  }
  const token = header.split(" ")[1];
  if(token){
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        }
        req.user = decoded;
        next();
    })
  }
    else{
        return res.status(401).json({
            message:"Token missing",
            success:false
        })
    }

}

module.exports = authmiddleware;