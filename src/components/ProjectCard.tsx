import type {JSX} from "react"
import {Link} from "react-router-dom"

type ProjectCardProps = {
    title: string,
    desc: string,
    image: string
}

export default function ProjectCard({title, desc, image}: ProjectCardProps): JSX.Element {
    return (
        <div className="flex flex-col rounded-2xl md:flex-row md:h-77.5 2xl:flex-col 2xl:h-full">
            <img className="rounded-t-2xl md:w-1/2 md:object-cover md:rounded-r-none md:rounded-l-2xl 2xl:w-full 2xl:rounded-b-none 2xl:rounded-t-2xl" src={image}/>
                
            <Link className="md:w-1/2 rounded-b-2xl md:rounded-l-none md:rounded-r-2xl 2xl:w-full 2xl:rounded-t-none 2xl:rounded-b-2xl" to="">
                <div 
                    className="flex flex-col items-center gap-y-4 text-center bg-[#FDF3F0] py-8 px-7.5 rounded-b-2xl group md:justify-center md:h-full md:rounded-l-none md:rounded-r-2xl 2xl:h-39.5 2xl:rounded-t-none 2xl:rounded-b-2xl hover:bg-peach"
                >
                    <h2 className="text-peach text-[1.25rem] font-medium leading-6.5 tracking-[5px] uppercase group-hover:text-white">{title}</h2>
                    <p className="text-dark-grey leading-6.5 group-hover:text-white">{desc}</p>
                </div>
            </Link>
        </div>
    )
}