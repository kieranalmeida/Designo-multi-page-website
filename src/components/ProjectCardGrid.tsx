import type {JSX} from "react"
import ProjectCard from "./ProjectCard"

type Project = {
    title: string,
    desc: string,
    image: string
}

type ProjectCardGridProps = {
    projects: Project[]
}

export default function ProjectCardGrid({projects}: ProjectCardGridProps): JSX.Element {
    return (
        <section className="grid gap-y-10 mx-6 md:gap-y-8 md:mx-10 2xl:grid-cols-3 2xl:gap-x-7.5 2xl:w-277.75 2xl:mx-auto" aria-label="Projects section">
            {
                projects.map( ({title, desc, image}: Project): JSX.Element => {
                    return <ProjectCard key={title} title={title} desc={desc} image={image}/>
                })
            }
        </section>
    )
}