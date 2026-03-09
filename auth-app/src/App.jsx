import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem("accessToken");
  if(!token){
    return <Navigate to="/" />
  }
  return children;
}
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      } />

      </Routes>
    </>
     
  )
}

export default App
