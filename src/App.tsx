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
import BlogIndividual from './pages/Blogs/BlogIndividual/BlogIndividual'
import CourseIndividual from './pages/Courses/CourseIndividualPage/CourseIndividual'
import CourseCategory from './pages/Courses/CourseCategory/CourseCategory'
import { FreeDemoProvider } from './context/FreeDemoContext'
import FreeDemoModal from './layout/Demo/FreeDemoModal'

function App() {

  return (
  <FreeDemoProvider>
  <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/courses/:course-category-slug" element={<CourseCategory />} />
        <Route path='/courses/:category-slug/:course-slug' element={<CourseIndividual />}/>
        <Route path="/blogs" element={<AllBlogs />} />
        
        <Route path="/blogs/:slug" element={<BlogIndividual />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyAndPolicy />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <FreeDemoModal />
  </FreeDemoProvider>    
  )
}

export default App