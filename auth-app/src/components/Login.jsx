import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           const res = await fetch('http://localhost:3000/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username,password})
           })
           const data = await res.json();
           console.log(data);
           if(data.success){
            alert("Login successful");
            localStorage.setItem("accessToken", data.accessToken);
            
            navigate('/dashboard')
           }else{
            alert("Login failed");
           }

        }catch(err){
           alert("Login failed");
        }

    }
  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="text" placeholder='Enter username'  name="username" onClick={(e)=>setUsername(e.target.value)}  />
            <input type="password" placeholder='Enter password'  name="password" onClick={(e)=>setPassword(e.target.value)} />
            <button type="submit">Login</button>

        </form>
    </div>
  )
}

export default Login