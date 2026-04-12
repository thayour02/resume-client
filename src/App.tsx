import './App.css'
import { Routes, Route } from 'react-router-dom'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import  Login  from './pages/Login'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='app' element={<Layout/>}>
          <Route index element={<Dashboard />} />
          <Route path='build/:resumeId' element={<ResumeBuilder/>} />
        </Route>

        <Route path='preview/:resumeId' element={<Preview/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
