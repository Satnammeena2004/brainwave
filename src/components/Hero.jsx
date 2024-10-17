import Section from './Section'
import { curve, heroBackground } from "../assets"
import Button from "./Button"
import { robot } from "../assets"
function Hero() {
  return (
    <Section
      crosess
      customPaddings
      id="hero"
      crossesOffset="lg:translate-y-[5.25rem]"
      className="pt-[12rem] -mt-[5.25rem]">
      <div className='container relative '>
        <div className='z-1 mx-auto max-w-[62rem] mb-[3.25rem] md:mb-20 lg:mb-[6.25rem]'>
          <h1 className='h1 mb-6'>  Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}


            <span className=' h1 inline-block relative'>
              Brainwave
              <img className='absolute top-full left-0' src={curve} alt='curve' width={624} height={28} />
            </span>

          </h1>
          <p className='body-1 mb-8 text-n-2'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app</p>
          <Button white href={"/pricing"}>
            Get Started
          </Button>
        </div>
        <div className=' relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>

          <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img src={robot} width={1020} height={480} className='w-full translate-y-[8%] md:translate-y-[10%] lg:-translate-y-[23%] scale-[1.7] md:scale-[1]' />
              </div>

            </div>
          </div>

          <div className='-z-1 absolute -top-[53%] w-[234%] left-1/2  -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
            <img src={heroBackground} className='w-full ' width={1440} height={1800} alt='hero-background' />
          </div>

        </div>

      </div>
    </Section>
  )
}

export default Hero