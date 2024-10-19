/* eslint-disable react/prop-types */
import { notification1 } from "../assets"
import { notificationImages } from "../constants"

function Notification({ className, title }) {
    return (
        <div className={`${className || ""} flex items-center py-10 px-4 pr-6 h-12 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-xl gap-5`}>
            <img width={60} height={60} className="rounded-2xl" src={notification1} />
            <div className="flex-1">
                <h6 className="mb-1 font-semibold text-base  text-left">{title}</h6>
                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        {notificationImages.map((image, index) => (<li className="flex w-6 h-6 rounded-full overflow-hidden ring-1 ring-n-4/20" key={index}>
                            <img width={20} height={20} className="w-full" src={image} />
                        </li>))}
                    </ul>
                    <div className="body-2 text-n-13">1min ago</div>
                </div>
            </div>

        </div>
    )
}

export default Notification