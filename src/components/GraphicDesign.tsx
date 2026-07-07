import type {JSX} from "react"
// Components
import ProjectCard from "./ProjectCard"
import ProjectCategoryCard from "./ProjectCategoryCard"
// Images
import patternDesignPagesTablet from "../images/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
import patternDesignPagesMobile from "../images/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import patternIntroGraphic from "../images/graphic-design/desktop/bg-pattern-intro-graphic.svg"
import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"
// Project preview images
import changePreview from "../images/graphic-design/desktop/image-change.jpg"
import boxedWaterPreview from "../images/graphic-design/desktop/image-boxed-water.jpg"
import sciencePreview from "../images/graphic-design/desktop/image-science.jpg"
// Project categories section mobile images
import webDesignMobile from "../images/home/mobile/image-web-design.jpg"
import appDesignMobile from "../images/home/mobile/image-app-design.jpg"
// Project categories section tablet images
import webDesignTablet from "../images/home/tablet/image-web-design.jpg"
import appDesignTablet from "../images/home/tablet/image-app-design.jpg"
// Project categories section desktop images
import webDesignDesktop from "../images/home/desktop/image-web-design-large.jpg"
import appDesignDesktop from "../images/home/desktop/image-app-design.jpg"

const webDesignImages = {
    mobile: webDesignMobile,
    tablet: webDesignTablet,
    desktop: webDesignDesktop
}

const appDesignImages = {
    mobile: appDesignMobile,
    tablet: appDesignTablet,
    desktop: appDesignDesktop
}

export default function GraphicDesign(): JSX.Element {
    return (
        <main className="relative flex flex-col gap-y-30 2xl:gap-y-40" aria-label="Hero section">
            <img className="absolute -z-2 top-31.5 w-251.5 hidden 2xl:block" src={patternLeaf} alt="" aria-hidden="true"/>
            {/* Hero section */}
            <section className="relative flex flex-col items-center z-0 h-80 py-26.25 px-6 bg-peach overflow-hidden md:h-63 md:mx-10 md:py-16 md:px-38.25 md:rounded-2xl 2xl:mx-41 2xl:px-47.75">
                <div className="flex flex-col gap-y-6 text-white text-center max-w-96">
                    <h1 className="text-[2rem] font-medium leading-9 md:text-[2rem] md:leading-12">Graphic Design</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem]">We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
                </div>

                <img className="absolute -z-1 rotate-270 top-35 -right-40 max-w-none md:hidden" src={patternDesignPagesMobile} aria-hidden="true"/>
                <img className="absolute -z-1 -top-43 -right-33 max-w-none hidden md:block 2xl:hidden" src={patternDesignPagesTablet} aria-hidden="true"/>
                <img className="absolute -z-1 -top-43 left-0 max-w-none hidden 2xl:block" src={patternIntroGraphic} aria-hidden="true"/>
            </section>

            {/* Projects section */}
            <section className="grid gap-y-10 mx-6 md:gap-y-8 md:mx-10 2xl:grid-cols-3 2xl:gap-x-7.5 2xl:mx-41" aria-label="Projects section">
                <ProjectCard 
                    title={"Tim Brown"} 
                    desc={"A book cover designed for Tim Brown's new release, 'Change'"}
                    image={changePreview}
                />
                <ProjectCard 
                    title={"Boxed Water"} 
                    desc={"A simple packaging concept made for Boxed Water"} 
                    image={boxedWaterPreview}
                />
                <ProjectCard 
                    title={"Science!"} 
                    desc={"A poster made in collaboration with the Federal Art Project"} 
                    image={sciencePreview}
                />
            </section>

            {/* Project categories section */}
            <section className="grid gap-y-6 mx-6 md:mx-10 mb-71.5 md:mb-95 2xl:grid-cols-2 2xl:gap-x-7.5 2xl:mx-41 2xl:h-77" aria-label="Project categories section">
                <ProjectCategoryCard url="web-design" images={webDesignImages} categoryName={"Web design"}/>
                    
                <ProjectCategoryCard url="app-design" images={appDesignImages} categoryName={"App design"}/>
            </section>
        </main>
    )
}