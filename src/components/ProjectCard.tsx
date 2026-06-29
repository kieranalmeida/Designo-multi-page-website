import {Link} from "react-router-dom"
import { FiChevronRight } from "react-icons/fi"

// The component receives an object containing images for all three screen sizes for each of the three cards rendered.
type ProjectCardProps = {
    url: string,
    images: {
        mobile: string,
        tablet: string,
        desktop: string
    }
    children: React.ReactNode
}

// The inline style defines three CSS variables that each assign their own background image (one for each of the three screen sizes). They are defined here in order to have access to the background images.
// The project-card class, defined separately in the CSS, controls the active background image using media queries and the variables defined below.
// "as React.CSSProperties" tells TypeScript that the inline style below is valid.
export default function ProjectCard({url, images, children}: ProjectCardProps) {
    return (
        <Link className="rounded-2xl focus:outline-offset-5" to={`/${url}`}>
            <div 
                className="project-card flex flex-col justify-center items-center gap-y-3 h-62.5 px-14 text-white text-center uppercase bg-cover bg-center rounded-2xl md:h-50 2xl:h-full" 
                style={{
                    "--mobile-bg": `url(${images.mobile})`,
                    "--tablet-bg": `url(${images.tablet})`,
                    "--desktop-bg": `url(${images.desktop})`,
                } as React.CSSProperties}
                >
                <h2 className="text-[1.75rem] font-medium leading-9 tracking-[0.0875rem] md:text-[2.5rem] md:leading-12">{children}</h2>

                <div className="flex items-center gap-x-4">
                    <p className="text-[0.9375rem] font-medium tracking-[0.3125rem]">View projects</p>
                    <FiChevronRight className="text-peach" aria-hidden="true"/>
                </div>
            </div>
        </Link>        
    )
}