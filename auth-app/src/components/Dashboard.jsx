import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");
    useEffect(()=>{
        const fetchProfile = async()=>{
            try{
                const res = await fetch('http://localhost:3000/api/profile',{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                const data = await res.json();
                console.log(data);
                setProfile(data);
            }catch(err){
                alert("Failed to fetch profile");
            }
        }
        fetchProfile();
    }, [])

    if(!token){
        return <h1>Please login to access the dashboard</h1>
    }

    

    const handleLogout=()=>{
        localStorage.removeItem("accessToken");
        alert("Logged out successfully");
        navigate('/')
    }
  return (
    <div>
         <h2>{profile?.message}</h2>
        <h1>{profile?profile.user.username:""}</h1>
        <button type='button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard