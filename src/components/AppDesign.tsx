import type {JSX} from "react"
// Components
import ProjectCardGrid from "./ProjectCardGrid"
import ProjectCategoryCard from "./ProjectCategoryCard"
// Hero section images
import patternDesignPagesMobile from "../images/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import patternDesignPagesTablet from "../images/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
// Data
import {appDesignProjects} from "../data/project-data"
// Project categories section images
import {webDesignImages, graphicDesignImages} from "../data/project-category-card-images"
// Other images
import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"

export default function AppDesign(): JSX.Element {
    return (
        <main className="relative flex flex-col gap-y-30 2xl:gap-y-40" aria-label="Hero section">
            <img className="absolute -z-2 left-0 top-31.5 pointer-events-none hidden 2xl:block" src={patternLeaf} alt="" aria-hidden="true"/>
            {/* Hero section */}
            <section className="relative flex flex-col items-center z-0 h-80 py-26.25 px-6 bg-peach overflow-hidden md:h-63 md:mx-10 md:py-16 md:px-38.25 md:rounded-2xl 2xl:w-277.75 2xl:mx-auto 2xl:px-47.75">
                <div className="flex flex-col gap-y-6 text-white text-center max-w-96">
                    <h1 className="text-[2rem] font-medium leading-9 md:text-[2rem] md:leading-12">App Design</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem]">Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <img className="absolute -z-1 rotate-270 top-35 -right-40 max-w-none md:hidden" src={patternDesignPagesMobile} aria-hidden="true"/>
                    <img className="absolute -z-1 -top-43 -right-33 max-w-none hidden md:block 2xl:rotate-180 2xl:right-73.75" src={patternDesignPagesTablet} aria-hidden="true"/>
                </div>
            </section>

            {/* Projects section */}
            <ProjectCardGrid projects={appDesignProjects}/>

            {/* Project categories section */}
            <section className="grid gap-y-6 mx-6 md:mx-10 mb-71.5 md:mb-95 2xl:grid-cols-2 2xl:gap-x-7.5 2xl:w-277.75 2xl:mx-auto 2xl:h-77" aria-label="Project categories section">
                <ProjectCategoryCard url="web-design" images={webDesignImages} categoryName={"Web design"}/>
                    
                <ProjectCategoryCard url="graphic-design" images={graphicDesignImages} categoryName={"Graphic design"}/>
            </section>
        </main>
    )
}