import type {JSX} from "react"
// Components
import ProjectCard from "./ProjectCard"
import ProjectCategoryCard from "./ProjectCategoryCard"
// Images
import patternDesignPagesTablet from "../images/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
import patternDesignPagesMobile from "../images/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"
// Project preview images
import airfilterPreview from "../images/app-design/desktop/image-airfilter.jpg"
import eyecamPreview from "../images/app-design/desktop/image-eyecam.jpg"
import faceitPreview from "../images/app-design/desktop/image-airfilter.jpg"
import todoPreview from "../images/app-design/desktop/image-todo.jpg"
import loopstudiosPreview from "../images/app-design/desktop/image-loopstudios.jpg"
// Project categories section mobile images
import webDesignMobile from "../images/home/mobile/image-web-design.jpg"
import graphicDesignMobile from "../images/home/mobile/image-graphic-design.jpg"
// Project categories section tablet images
import webDesignTablet from "../images/home/tablet/image-web-design.jpg"
import graphicDesignTablet from "../images/home/tablet/image-graphic-design.jpg"
// Project categories section desktop images
import webDesignDesktop from "../images/home/desktop/image-web-design-small.jpg"
import graphicDesignDesktop from "../images/home/desktop/image-graphic-design.jpg"

const webDesignImages = {
    mobile: webDesignMobile,
    tablet: webDesignTablet,
    desktop: webDesignDesktop
}

const graphicDesignImages = {
    mobile: graphicDesignMobile,
    tablet: graphicDesignTablet,
    desktop: graphicDesignDesktop
}

export default function AppDesign(): JSX.Element {
    return (
        <main className="relative flex flex-col gap-y-30 2xl:gap-y-40" aria-label="Hero section">
            <img className="absolute -z-2 top-31.5 w-251.5 hidden 2xl:block" src={patternLeaf} alt="" aria-hidden="true"/>
            {/* Hero section */}
            <section className="relative flex flex-col items-center z-0 h-80 py-26.25 px-6 bg-peach overflow-hidden md:h-63 md:mx-10 md:py-16 md:px-38.25 md:rounded-2xl 2xl:mx-41 2xl:px-47.75">
                <div className="flex flex-col gap-y-6 text-white text-center max-w-96">
                    <h1 className="text-[2rem] font-medium leading-9 md:text-[2rem] md:leading-12">App Design</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem]">Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
                </div>

                <img className="absolute -z-1 rotate-270 top-35 -right-40 max-w-none md:hidden" src={patternDesignPagesMobile} aria-hidden="true"/>
                <img className="absolute -z-1 -top-43 -right-33 max-w-none hidden md:block 2xl:rotate-180 2xl:right-73.75" src={patternDesignPagesTablet} aria-hidden="true"/>
            </section>

            {/* Projects section */}
            <section className="grid gap-y-10 mx-6 md:gap-y-8 md:mx-10 2xl:grid-cols-3 2xl:gap-x-7.5 2xl:mx-41" aria-label="Projects section">
                <ProjectCard 
                    title={"Airfilter"} 
                    desc={"Solving the problem of poor indoor air quality by filtering the air"}
                    image={airfilterPreview}
                />
                <ProjectCard 
                    title={"Eyecam"} 
                    desc={"Product that lets you edit your favorite photos and videos at any time"} 
                    image={eyecamPreview}
                />
                <ProjectCard 
                    title={"Faceit"} 
                    desc={"Get to meet your favorite internet superstar with the faceit app"} 
                    image={faceitPreview}
                />
                <ProjectCard 
                    title={"Todo"} 
                    desc={"A todo app that features cloud sync with light and dark mode"}
                    image={todoPreview}
                />
                <ProjectCard 
                    title={"Loopstudios"} 
                    desc={"A VR experience app made for Loopstudios"} 
                    image={loopstudiosPreview}
                />
            </section>

            {/* Project categories section */}
            <section className="grid gap-y-6 mx-6 md:mx-10 mb-71.5 md:mb-95 2xl:grid-cols-2 2xl:gap-x-7.5 2xl:mx-41 2xl:mb-95 2xl:h-77" aria-label="Project categories section">
                <ProjectCategoryCard url="web-design" images={webDesignImages} categoryName={"Web design"}/>
                    
                <ProjectCategoryCard url="graphic-design" images={graphicDesignImages} categoryName={"Graphic design"}/>
            </section>
        </main>
    )
}