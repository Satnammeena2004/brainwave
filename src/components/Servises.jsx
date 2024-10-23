import { check, service1, service2, service3 } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import Generating from "./Generating"
import Heading from "./Heading"
import Section from "./Section"
import { PhotoChatMessage, VideoBar, VideoChatMessage } from "../design/Services"

const Servises = () => {
    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading title="Generative AI made for creators." text="Brainwave unlocks the potential of AI-powered applications" />
                <div className="relative ">
                    <div className="relative z-1 flex h-[42rem] border border-n-6 rounded-3xl  overflow-hidden py-24 px-15 mb-4 ">
                        <div className="absolute opacity-90 md:w-3/5  left-0  top-0 w-full h-full ">
                            <img src={service1} className="w-full h-full object-cover md:object-right lg:object-top" height={430} alt="AI Smart" />
                        </div>

                        <div className="z-1 relative   ml-auto w-[17rem]">
                            <h4 className="h4 mb-2 text-left">Smartest AI</h4>
                            <p className="body-2 text-n-3 text-left mb-10">Brainwave unlocks the potential of AI-powered applications</p>

                            <ul>
                                {brainwaveServices.map((service, index) => (
                                    <li key={index} className="flex items-center mb-4 border-t border-n-6 pt-4">
                                        <img src={check} width={24} height={24} alt="check" />
                                        <p className="ml-4">  {service}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Generating className="absolute border border-n-6  bottom-20 z-2 left-4 right-4 md:left-1/2 md:-translate-x-1/2" />
                    </div>
                    <div className="relative z-1 gap-4 grid lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-2xl overflow-hidden">
                            <div className="absolute opacity-80 inset-0">
                                <img src={service2} className="w-full h-full object-cover" width={630} height={750} alt="robot" />
                            </div>
                            <div className="absolute bottom-5 left-8 right-8 z-2 ">
                                <h4 className="h4 mb-2 text-left">Photo editing</h4>
                                <p className="body-2 text-n-3 text-left mb-10">Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!</p>
                            </div>
                            <PhotoChatMessage />
                        </div>
                        <div className="lg:min-h-[46rem] p-4 bg-n-7 rounded-3xl">
                            <div className="py-12 px-4">
                                <h4 className="h4 my-4 text-left">Video generation</h4>
                                <p className="body-2 text-left  text-n-4 mb-8">The world’s most powerful AI photo and video art generation engine. What will you create?</p>
                                <ul className="flex items-center justify-between">
                                    {brainwaveServicesIcons.map((icons, index) => (
                                        <li key={index} className={`flex justify-center items-center rounded-2xl  p-0.25 ${index === 2 ? "bg-conic-gradient w-15 h-15" : "bg-n-6 w-10 h-10 "} md:w-16 md:h-16`}>
                                            <div className={`${index === 2 ? "m-auto  bg-n-7 w-full h-full rounded-2xl flex justify-center items-center" : ""}`}>
                                                <img src={icons} width={24} height={24} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className=" relative overflow-hidden bg-n-8 lg:h-[25rem] h-[20rem] rounded-2xl">
                                <img className="w-full h-full object-cover" src={service3} alt="scary robot" />
                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Servises