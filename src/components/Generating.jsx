import { loading } from '../assets'

function Generating({ className }) {
    return (
        <div
            className={` flex items-center h-[3.25rem] bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
            <img className='mx-4 animate-spin' width={30} src={loading} />
            AI is generating !
        </div>
    )
}

export default Generating