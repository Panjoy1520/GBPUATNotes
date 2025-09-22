import { Routes, Route } from 'react-router-dom';

import Heropage from './pages/Heropage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Verifypage from './pages/Verifypage';
import UploadForm from './pages/UploadForm';
import CotPage from './pages/CotPage';
import YearPage from './pages/YearPage';
import CoursePage from './pages/CoursePage';
import CourseFilespage from './pages/CourseFilespage';
import Root from './components/Root';
import ProtectedRoute from './components/ProtectedRoute';
import ContactUs from './pages/ContactUs';
import AboutSection from './pages/About';
import FavouritePage from './pages/FavouritePage'

function App() {
  return (
    <Routes>
     
      <Route path="/" element={<Heropage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify" element={<Verifypage />} />

     
      
        <Route path="/home" element={<Home />} />
        <Route path="/home/:collegevalue" element={<CotPage />} />
        <Route path="/home/:collegevalue/:branchvalue" element={<YearPage />} />
        <Route path="/home/:collegevalue/:branchvalue/:year" element={<CoursePage />} />
        <Route path="/home/:collegevalue/:branchvalue/:year/:courseCode" element={<CourseFilespage />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/home/uploadform" element={<UploadForm />} />
        </Route>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/home/favourite' element={<FavouritePage/>}/>
      
      
    </Routes>
  );
}

export default App;