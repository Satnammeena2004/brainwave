import { check2, grid, loading1 } from "../assets"
import { roadmap } from "../constants"
import Heading from "./Heading"
import Section from "./Section"
import Tagline from "./Tagline"
import { Gradient } from "../design/Roadmap"
import Button from "./Button"
const Roadmap = () => {
    return (
        <Section className="" id="roadmap">
            <Heading tag="Ready to get started" className="mb-20" title="What we’re working on" />
            <div className="container pb-10 ">

                <div className="relative grid md:grid-cols-2  gap-4">
                    {roadmap.map((item) => (
                        <div key={item.id} className="relative border border-n-6 md:odd:-translate-y-15   md:py-16 py-10 rounded-3xl p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full">
                                <img src={grid} alt="grid" />
                            </div>
                            <div className="relative flex items-center justify-between px-8">
                                <Tagline>{item.date}</Tagline>
                                <div className="bg-white p-0 px-3  rounded-sm  flex items-center">
                                    <img src={item.status === "done" ? check2 : loading1} alt="check" />
                                    <p className="text-n-7 whitespace-nowrap text-sm ml-2"> {item.status === "done" ? "Done" : "in progress"}</p>
                                </div>
                            </div>
                            <div className="w-full  mt-8">
                                <img src={item.imageUrl} className="w-full" alt={item.text} />
                            </div>
                            <div className="flex my-2 flex-col justify-start items-start">
                                <h4 className="h4 my-2">{item.title}</h4>
                                <p className="body-2 text-left text-n-4">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Gradient />
            </div>
            <div className="flex justify-center mt-10">

                <Button href="/roadmap">Our Roadmap</Button>
            </div>
        </Section>
    )
}

export default Roadmap