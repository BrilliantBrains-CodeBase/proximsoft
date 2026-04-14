// import { testimonials } from "../../data/testimonials/testimonials"
// import CTASection from "../../layout/CTA/CTASection"
// import TestimonialSection from "../../layout/Testimonials/TestimonialSection"
// import CourseCategoriesSection from "./components/CourseCategoriesSection"
// import FaqSection from "./components/FaqSection"
// import Hero from "./components/Hero"
// import StatsCTASection from "./components/StatsCTASection"
// import WhyTrustUsSection from "./components/WhyTrustUsSection"
// import FutureReadySection from "./components/FutureReadySection"
// import CareerSupportSection from "./components/CareerSupportSection"
// import SuccessStories from "./components/SuccessStories"
import useMeta from "../../hooks/useMeta" 
import HeroSection from "./components/HeroSection"
import CourseCategoriesSectionV2 from "./components/CourseCategoriesSectionV2"
import BrandSlider from "./components/BrandSlider"
import AboutUsSectionV2 from "./components/AboutUsSectionV2"
import TopCourses from "./components/TopCourses"
import NewsletterSection from "./components/Newslettersection "
// import TopInstructors from "./components/TopInstructors"
import StatsStrip from "./components/StatsStrip"
import FAQSectionV2 from "./components/FAQSectionV2"
import LearningJourney from "./components/LearningJourney"
import RolesCards from "./components/RolesCards"
import LatestNewsFeed from "../Blogs/AllBlogs/components/LatestNews"
import WhatWeDoBest from "../About/components/WhatWeDoBest"

const Home = () => {
  // Setup SEO metadata for the Landing Page
  useMeta({
    title: "Proximsoft | Empower Your Future with Expert-Led Courses",
    description: "Join thousands of learners gaining real-world skills in AI, Cloud Computing, Software Development, and more. Start your journey with Proximsoft today.",
  });

  return (
    <div className="">
      {/* <Hero /> */}
      <HeroSection />
      {/* <CourseCategoriesSection /> */}
      <CourseCategoriesSectionV2 />
      <BrandSlider />
      <AboutUsSectionV2 />
      <TopCourses />
      <NewsletterSection />
      {/* <TopInstructors /> */}
      <WhatWeDoBest />
      <StatsStrip />
      <FAQSectionV2 />
      <LearningJourney />
      <RolesCards />
      <LatestNewsFeed />
      {/* <WhyTrustUsSection /> */}
      {/* <StatsCTASection /> */}
      {/* <FutureReadySection /> */}
      {/* <SuccessStories /> */}
      {/* <CareerSupportSection /> */}
      {/* <div className="relative z-10 bg-white">
        <TestimonialSection testimonials={testimonials}/>
      </div> */}
      {/* <FaqSection />
      <CTASection /> */}
    </div>
  )
}

export default Home