import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import PricingList from "./PricingList"
import Section from "./Section"
import { LeftLine, RightLine } from "../design/Pricing"
const Pricing = () => {
    return (
        <Section className="overflow-hidden " >
            <div className="hidden md:block relative z-2 mb-20">
                <div className="hidden md:flex justify-center ">
                    <img src={smallSphere} className="relative z-2" width={255} height={255} />
                </div>
                <div className="absolute w-[50rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ">
                    <img src={stars} className="w-full" width={900} height={400} />
                </div>

            </div>

            <Heading title="Pay once, use forever" tag="Get started with Brainwave" />
            <div className="relative sm:container" id="pricing">

                <PricingList />
                <LeftLine />
                <RightLine />

            </div>
            <div className="mt-6 flex justify-center">
                <a href="#pricing" className="border-b tracking-wider uppercase font-code font-bold text-sm">see all details</a>

            </div>
        </Section>
    )
}

export default Pricing