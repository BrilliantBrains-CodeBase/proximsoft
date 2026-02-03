import './App.css'
import { Routes,Route } from 'react-router-dom'
import MainLayout from './layout/Main/MainLayout'
import Home from './pages/Home/Home'
import Aboutus from './pages/About/Aboutus'
import AllCourses from './pages/Courses/AllCourses/AllCourses'
import AllBlogs from './pages/Blogs/AllBlogs/AllBlogs'
import TermsAndConditions from './pages/Legal/TermsAndConditions'
import PrivacyAndPolicy from './pages/Legal/PrivacyAndPolicy'
import NotFound from './pages/NotFound/NotFound'
import ContactUs from './pages/Contact/ContactUs'

function App() {

  return (
     <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/blogs" element={<AllBlogs/>} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyAndPolicy/>} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App