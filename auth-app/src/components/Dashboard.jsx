import React from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");
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
        <h1>Welcome to the Dashboard</h1>
        <button type='button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard