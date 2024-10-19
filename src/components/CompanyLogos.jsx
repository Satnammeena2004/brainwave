import { companyLogos } from "../constants";

function CompanyLogos({ className }) {
    return (
        <div>
            <h5 className="tagline mb-6 text-n-1/50 text-center">Helping people to create beautiful content at </h5>


            <ul className="flex  px-16 my-20">
                {companyLogos.map((logo, index) => {
                    return <li className="flex flex-1 justify-center items-center" key={index}>
                        <img src={logo} alt={logo} />
                    </li>
                })}
            </ul>

        </div>
    )
}

export default CompanyLogos