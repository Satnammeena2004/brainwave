import { benefits } from '../constants'
import Heading from './Heading'
import Section from './Section'
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from "../design/Benefits"
function Benefits() {

    return (
        <Section crosess  id="benefits">
            <div className='container relative z-2'>

                <Heading title="Chat Smarter, Not Harder with Brainwave" />
                <div className='flex flex-wrap gap-8 justify-center'>
                    {benefits.map((item) => (
                        <div key={item.id} style={{
                            backgroundImage: `url(${item.backgroundUrl})`
                        }} className='relative group   block min-h-[18rem] border border-transparent   flex-1 bg-no-repeat bg-[length:100%_100%] max-w-[25rem]  min-w-[22rem]  p-10 rounded-2xl  '>
                            <div className='relative z-2 flex flex-col'>
                                <h2 className='h5 mb-6 '>{item.title}</h2>

                                <p className='body-2 mb-16 text-n-3'>{item.text}</p>
                                <div className='flex items-center'>
                                    <img src={item.iconUrl} width={48} height={48} />
                                    <p className='ml-auto font-code uppercase text-n-1 text-xs tracking-wider '>Explore More </p>
                                    <Arrow />
                                </div>
                            </div>
                            {item.light && <GradientLight />}
                            <div
                                className="absolute inset-0.5 bg-n-8"

                            >
                                <div className="absolute  inset-0 opacity-0 transition-opacity group-hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>




                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Benefits