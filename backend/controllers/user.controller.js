const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


async function login(req, res){
   
    const {username, password} = req.body;
    try{

        if(!username || !password){
            return res.status(400).json({
                message: "Username and Password are required",
                success: false
            })
        }
        if(username!=="admin" || password!=="admin123"){
            return res.status(401).json({
                message:"Invalid username or password",
                success:false
            })
        }
        console.log("Login successful");
        const accessToken = jwt.sign({username}, process.env.TOKEN_SECRET, {expiresIn: '1h'});
        console.log(accessToken);

        return res.status(200).json({
            message:"Login sucessful",
            success:true,
            accessToken
        })

        
    }catch(err){
         return res.status(500).json({
            message:"something went wrong",
            success:false
         })
    }


}

async function profile(req,res){
    
}

async function logout(req, res){

}

module.exports={login, profile, logout};