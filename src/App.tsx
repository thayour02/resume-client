import './App.css'
import { Routes, Route } from 'react-router-dom'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </>
  )
}

export default App
