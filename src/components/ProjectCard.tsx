import type {JSX} from "react"
import {Link} from "react-router-dom"

type ProjectCardProps = {
    title: string,
    desc: string,
    image: string
}

export default function ProjectCard({title, desc, image}: ProjectCardProps): JSX.Element {
    return (
        <div className="flex flex-col md:flex-row md:h-77.5 2xl:flex-col 2xl:h-full">
            <img className="md:w-1/2 md:object-cover 2xl:w-full 2xl:h-full" src={image}/>
                
            <Link className="md:w-1/2 2xl:w-full" to="">
                <div 
                    className="flex flex-col items-center gap-y-4 text-center bg-[#FDF3F0] py-8 px-7.5 md:justify-center md:h-full 2xl:h-39.5 hover:bg-peach"
                >
                    <h2 className="text-peach text-[1.25rem] font-medium leading-6.5 tracking-[5px] uppercase">{title}</h2>
                    <p className="text-dark-grey leading-6.5">{desc}</p>
                </div>
            </Link>
        </div>
    )
}

// Round corners
// Check Link focus

// Change text to white on hover