// import AboutTheFirm from "./components/AboutTheFirm"
// import GetInTouch from "./components/GetInTouch"
// import ImpactAtAGlance from "./components/ImpactAtAGlance"
// import WhatWeDoBest from "./components/WhatWeDoBest"
// import WhoWeAre from "./components/WhoWeAre"
// import WhyProximsoft from "./components/WhyProximsoft"

import BrandSlider from "../Home/components/BrandSlider"
import LearningJourney from "../Home/components/LearningJourney"
import NewsletterSection from "../Home/components/Newslettersection "
import AboutUsHero from "./components/AboutUsHero"
import AboutUsSection from "./components/AboutUsSection"
import FeaturesSection from "./components/FeatureSection"
import TestimonialsSection from "./components/TestimonialsSection"
import WhatWeDoBest from "./components/WhatWeDoBest"

const Aboutus = () => {
  return (
    <div className="bg-white mt-28">
      {/* <AboutTheFirm />
      <ImpactAtAGlance />
      <WhatWeDoBest />
      <WhoWeAre />
      <WhyProximsoft />
      <GetInTouch /> */}

      <AboutUsHero />
      <AboutUsSection />
      <BrandSlider />
      <WhatWeDoBest />
      <FeaturesSection />
      <NewsletterSection />
      <LearningJourney />
      <TestimonialsSection />
    </div>
  )
}

export default Aboutus
