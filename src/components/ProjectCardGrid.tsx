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
        <section className="grid gap-y-10 mx-6 md:gap-y-8 md:mx-10 2xl:grid-cols-3 2xl:gap-x-7.5 2xl:mx-41" aria-label="Projects section">
            {
                projects.map( ({title, desc, image}: Project): JSX.Element => {
                    return <ProjectCard title={title} desc={desc} image={image}/>
                })
            }
        </section>
    )
}

// Create array of objects for each project page to be iterated over and produce a ProductCard for each one
// Use the title, description and preview image in each object to construct the ProductCard
// The array of objects is passed into each instance of ProjectCardGrid (3)

// Receives an array of objects (an array of Project objects)
// Iterastes over each Project object in the array of Project objects