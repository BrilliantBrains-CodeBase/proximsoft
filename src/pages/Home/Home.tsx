import { testimonials } from "../../data/testimonials/testimonials"
import CTASection from "../../layout/CTA/CTASection"
import TestimonialSection from "../../layout/Testimonials/TestimonialSection"
import CourseCategoriesSection from "./components/CourseCategoriesSection"
import FaqSection from "./components/FaqSection"
import Hero from "./components/Hero"
import StatsCTASection from "./components/StatsCTASection"
import WhyTrustUsSection from "./components/WhyTrustUsSection"
import useMeta from "../../hooks/useMeta" // Adjust path as needed

const Home = () => {
  // Setup SEO metadata for the Landing Page
  useMeta({
    title: "Proximsoft | Empower Your Future with Expert-Led Courses",
    description: "Join thousands of learners gaining real-world skills in AI, Cloud Computing, Software Development, and more. Start your journey with Proximsoft today.",
  });

  return (
    <div className="">
      <Hero />
      <CourseCategoriesSection />
      <WhyTrustUsSection />
      <StatsCTASection />
      <div className="relative z-10 bg-white">
        <TestimonialSection testimonials={testimonials}/>
      </div>
      <FaqSection />
      <CTASection />
    </div>
  )
}

export default Home