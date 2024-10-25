import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import PricingList from "./PricingList"
import Section from "./Section"

const Pricing = () => {
    return (
        <Section className="overflow-hidden">
            <div className="container hidden md:block relative z-2 mb-20">
                <div className="hidden md:flex justify-center ">
                    <img src={smallSphere} className="relative z-2" width={255} height={255} />
                </div>
                <div className="absolute w-[50rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ">
                    <img src={stars} className="w-full" width={900} height={400} />
                </div>

            </div>

            <Heading title="Pay once, use forever" tag="Get started with Brainwave" />
            <div className="relative">

                <PricingList />
            </div>
        </Section>
    )
}

export default Pricing