/* eslint-disable react/prop-types */

import Tagline from "./Tagline"

function Heading({ className, title, text, tag }) {
    return (
        <div className={`${className} mt-10 mx-auto mb-10 max-w-[50rem]`}>
            {tag &&
                <Tagline className="flex mb-4 justify-center">
                    <p>{tag}
                    </p>
                </Tagline>
            }
            {title && <h2 className="h2">{title}</h2>}
            {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
        </div>
    )
}

export default Heading