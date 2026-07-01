import type {JSX} from "react"
// Components
import ProjectCategoryCard from "./ProjectCategoryCard"
// Images
import patternDesignPagesTablet from "../images/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
import patternDesignPagesMobile from "../images/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
// Project categories section mobile images
import appDesignMobile from "../images/home/mobile/image-app-design.jpg"
import graphicDesignMobile from "../images/home/mobile/image-graphic-design.jpg"
// Project categories section tablet images
import appDesignTablet from "../images/home/tablet/image-app-design.jpg"
import graphicDesignTablet from "../images/home/tablet/image-graphic-design.jpg"
// Project categories section desktop images
import appDesignDesktop from "../images/home/desktop/image-app-design.jpg"
import graphicDesignDesktop from "../images/home/desktop/image-graphic-design.jpg"
// import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"

const appDesignImages = {
    mobile: appDesignMobile,
    tablet: appDesignTablet,
    desktop: appDesignDesktop
}

const graphicDesignImages = {
    mobile: graphicDesignMobile,
    tablet: graphicDesignTablet,
    desktop: graphicDesignDesktop
}

export default function WebDesign(): JSX.Element {
    return (
        <main className="relative flex flex-col gap-y-30 2xl:gap-y-40" aria-label="Hero section">
            {/* Hero section */}
            <section className="relative flex flex-col items-center z-0 h-80 py-26.25 px-6 bg-peach overflow-hidden md:h-63 md:mx-10 md:py-16 md:px-38.25 md:rounded-2xl 2xl:mx-41 2xl:px-47.75">
                <div className="flex flex-col gap-y-6 text-white text-center max-w-96">
                    <h1 className="text-[2rem] font-medium leading-9 md:text-[2rem] md:leading-12">Web Design</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem]">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
                </div>

                <img className="absolute -z-1 rotate-270 top-35 -right-40 max-w-none md:hidden" src={patternDesignPagesMobile}/>
                <img className="absolute -z-1 -top-43 -right-33 max-w-none hidden md:block 2xl:right-0" src={patternDesignPagesTablet}/>
            </section>

            {/* Projects section */}
            <section>

            </section>

            {/* Project categories section */}
            <section className="grid gap-y-6 mx-6 md:mx-10 mb-71.5 md:mb-30 2xl:grid-cols-2 2xl:gap-x-7.5 2xl:h-160 2xl:mx-41 2xl:mb-95 2xl:max-h-77" aria-label="Project categories section">
                <ProjectCategoryCard url="app-design" images={appDesignImages}>App design</ProjectCategoryCard>
                    
                <ProjectCategoryCard url="graphic-design" images={graphicDesignImages}>Graphic design</ProjectCategoryCard>
            </section>
        </main>
    )
}

// Accessibility, focus