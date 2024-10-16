
import { useLocation } from "react-router-dom"
import { brainwave } from "../assets"
import { navigation } from "../constants"
import Button from "./Button";
import { HamburgerMenu } from "../design/Header"
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg"

import { enablePageScroll, disablePageScroll } from "scroll-lock"

function Header() {

    const pathName = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false)


    const toggleNavigation = () => {
        if (openNavigation) {
            enablePageScroll()
            setOpenNavigation(false)
        } else {
            disablePageScroll()
            setOpenNavigation(true)

        }
    }

    const handleClick = () => {
        if (!openNavigation) return
        enablePageScroll()
        setOpenNavigation(false)
    }

    return (
        <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">

            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={brainwave} width={190} height={40} alt="brainwave" />
                </a>
                <nav className={`${openNavigation ? "flex" : "hidden"} w-full  fixed top-[5rem] left-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>



                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">

                        {navigation.map((item) => (
                            <a onClick={handleClick} key={item.id} href={item.url} className={`block realtive font-code text-2xl uppercase text-n-1 
                        ${item.onlyMobile ? "lg:hidden" : ""}
                        ${item.url === pathName.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}
                        transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <a className="button hidden mr-8 text-n-1/50  transition-colors hover:text-n-1 lg:block" href="#signup">
                    New Account
                </a>
                <Button className={"ml-auto "} px="px-3">
                    SignUp
                </Button>

                <Button className="mx-2 lg:hidden" px="px-3" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>


        </div>
    )
}

export default Header