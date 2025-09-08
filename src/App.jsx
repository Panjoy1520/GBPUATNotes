import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heropage from './pages/Heropage'
import LoginPage from './pages/LoginPage'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Verifypage from './pages/Verifypage'
import UploadForm from './pages/UploadForm'
import CotPage from './pages/CotPage'
import YearPage from './pages/YearPage'
import CoursePage from './pages/CoursePage'
import CourseFilespage from './pages/CourseFilespage'

function App() {
  

  return (
    <Routes>
    <Route path = "/" element = {<Heropage/>}/>
    <Route path = "/login" element = {<LoginPage/>}/>
    <Route path = "/home" element = {<Home/>}/>
    <Route path = "/verify" element = {<Verifypage/>}/>
    <Route path = "/home/uploadform" element = {<UploadForm/>}/>
    <Route path = "/home/:collegevalue" element = {<CotPage/>}/>
    <Route path = "/home/:collegevalue/:branchvalue" element = {<YearPage/>}/>
    <Route path = "/home/:collegevalue/:branchvalue/:year" element = {<CoursePage/>}/>
    <Route path="/home/:collegevalue/:branchvalue/:year/:courseCode" element={<CourseFilespage />}
/>


    </Routes>
  )
}

export default App
