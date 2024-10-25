import { check } from "../assets"
import { pricing } from "../constants"
import Button from "./Button"

const PricingList = () => {
    return (
        <div className="flex flex:wrap justify-center mx-auto w-[85vw] max-lg:flex-wrap gap-4 p-2  ">
            {pricing.map((item) => {
                return <div key={item.id} className="border   px-6 py-8 border-n-6 rounded-2xl  h-full min-h-[25rem] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                    <h4 className="h4 text-left mb-3 [&>h4]:text-color-1">{item.title}</h4>
                    <p className="body-2 h-20 text-left">{item.description}</p>
                    <div className="flex items-center justify-start h-[5.5rem]"> {item.price && (
                        <>
                            <div className="text-2xl">$</div>
                            <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>

                        </>
                    )}
                    </div>
                    <Button href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
                        white={!!item.price} className="my-10 w-full">
                        {item.price ? "Get started" : "Contact us"}
                    </Button>
                    <ul>
                        {item.features.map((feature, index) => (
                            <li key={index} className="flex items-start border-t border-n-6 py-4 ">
                                <img src={check} width={24} height={24} alt="check" />
                                <p className="body-2 ml-4 text-left">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            })}
        </div>
    )
}

export default PricingList