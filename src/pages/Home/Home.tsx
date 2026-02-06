import { testimonials } from "../../data/testimonials/testimonials"
import CTASection from "../../layout/CTA/CTASection"
import TestimonialSection from "../../layout/Testimonials/TestimonialSection"
import CourseCategoriesSection from "./components/CourseCategoriesSection"
import FaqSection from "./components/FaqSection"
import StatsCTASection from "./components/StatsCTASection"
import WhyTrustUsSection from "./components/WhyTrustUsSection"

const Home = () => {
  return (
    <div className="mt-22 bg-white">
      <CourseCategoriesSection />
      <WhyTrustUsSection />
      <StatsCTASection />
      <TestimonialSection testimonials={testimonials}/>
      <FaqSection />
      <CTASection />
    </div>
  )
}

export default Home
