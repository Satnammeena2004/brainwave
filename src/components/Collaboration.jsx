import { collabApps, collabContent, collabText } from '../constants'
import Section from './Section'
import { brainwaveSymbol, check } from "../assets"
import Button from './Button'
import {LeftCurve, RightCurve} from "../design/Collaboration"
function Collaboration() {
    return (
        <Section crosess>
            <div className='lg:flex justify-between gap-x-10 container'>
                <div className='max-w-[25rem] flex flex-col items-start'>
                    <h2 className='h2 mb-4 text-left'>AI Chat App for seamless collaboration</h2>
                    <ul>
                        {collabContent.map((collab, index) => (
                            <li key={index} className='mb-4 my-6'>
                                <div key={index} className='flex'>
                                    <img width={24} height={24} src={check} alt='check' />
                                    <h6 className='ml-3 body-2'>{collab.title}</h6>
                                </div>
                                {collab.text && <p className='body-2 text-left ml-2 mt-3 text-n-4'>{collab.text}</p>}
                            </li>
                        ))}
                    </ul>
                    <Button className="mt-4">TRY IT NOW</Button>
                </div>
                <div className='flex flex-col relative mt-8'>
                    <p className='body-2 text-left md:mb-10 w-[30rem] text-n-3 mt-4'>{collabText}</p>
                    <div className='m-auto  flex w-[22rem] scale-75 md:scale-100 aspect-square rounded-full  border border-n-6'>
                        <div className='w-60 m-auto  flex md:scale-100 aspect-square rounded-full  border border-n-6'>
                            <div className='w-[6rem] p-2 m-auto rounded-full aspect-square bg-conic-gradient'>
                                <div className='w-full flex justify-center items-center h-full bg-n-8 rounded-full  '>
                                    <img className='' src={brainwaveSymbol} width={48} height={48} alt='brainwaveSymbol' />
                                </div>
                            </div>
                        </div>

                        <ul className=''>{collabApps.map((app, i) => {
                            return <li className={`absolute   top-0 origin-bottom -ml-6 h-1/2   left-1/2 rotate-${i * 45}`} key={app.id}>
                                <div className={`relative -top-[1.6rem]  flex w-[3.25rem] h-[3.25rem] border border-n-1/15 rounded-xl bg-n-7  -rotate-${i * 45}`} >
                                    <img src={app.icon} className='m-auto' width={app.width} height={app.height} key={app.id} />

                                </div>
                            </li>
                        })}
                        </ul>
                        <LeftCurve/>
                        <RightCurve/>

                    </div>
                </div>


            </div>
        </Section>
    )
}

export default Collaboration