import { testimonials } from "../../data/testimonials/testimonials"
import CTASection from "../../layout/CTA/CTASection"
import TestimonialSection from "../../layout/Testimonials/TestimonialSection"
import CourseCategoriesSection from "./components/CourseCategoriesSection"
import FaqSection from "./components/FaqSection"
import Hero from "./components/Hero"
import StatsCTASection from "./components/StatsCTASection"
import WhyTrustUsSection from "./components/WhyTrustUsSection"

const Home = () => {
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
