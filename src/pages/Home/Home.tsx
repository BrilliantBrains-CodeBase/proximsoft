import CTASection from "../../layout/CTA/CTASection"
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
      <FaqSection />
      <CTASection />
    </div>
  )
}

export default Home
