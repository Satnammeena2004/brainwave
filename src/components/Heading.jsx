/* eslint-disable react/prop-types */

function Heading({ className, title }) {
    return (
        <div className={`${className} mt-10 mx-auto mb-10 max-w-[50rem]`}>
            {title && <h2 className="h2">{title}</h2>}
        </div>
    )
}

export default Heading