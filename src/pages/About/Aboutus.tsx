import AboutTheFirm from "./components/AboutTheFirm"
import GetInTouch from "./components/GetInTouch"
import ImpactAtAGlance from "./components/ImpactAtAGlance"
import WhatWeDoBest from "./components/WhatWeDoBest"
import WhoWeAre from "./components/WhoWeAre"
import WhyProximsoft from "./components/WhyProximsoft"

const Aboutus = () => {
  return (
    <div className="bg-white">
      <AboutTheFirm />
      <ImpactAtAGlance />
      <WhatWeDoBest />
      <WhoWeAre />
      <WhyProximsoft />
      <GetInTouch />
    </div>
  )
}

export default Aboutus
