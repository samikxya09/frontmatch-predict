import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './pages/authentication/login'
import Register from './pages/authentication/Register'
import Team from './pages/Team'
import Match from './pages/match'


function App() {
 

  return (
    <>
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<h1>this is home page</h1>}/>
      <Route path='/about' element={<h1>this is about page</h1>} />
      <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       <Route path ="/team" element ={<Team/>} />
        <Route path ="/match" element ={<Match/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
