import { socials } from "../constants"
import Section from "./Section"

function Footer() {
  return (
    <Section crosess customPaddings="!px-0 !py-10">
<div className="container flex flex-col md:flex-row sm:justify-between items-center gap-10">
<p className="text-n-4 caption">© {new Date().getFullYear()} All right reserved</p>
<ul className="flex gap-4 flex-wrap">
    {socials.map((social)=>{
        return <li key={social.id}>
            <a className="flex justify-center item-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6" href={social.title}><img width={16} height={16} src={social.iconUrl} alt={social.title}/></a>
        </li>
    })}
</ul>
</div>
    </Section>
  )
}

export default Footer