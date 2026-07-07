import type {JSX} from "react"
// Components
import ProjectCard from "./ProjectCard"
import ProjectCategoryCard from "./ProjectCategoryCard"
// Images
import patternDesignPagesTablet from "../images/shared/tablet/bg-pattern-design-pages-intro-tablet.svg"
import patternDesignPagesMobile from "../images/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"
import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"
// Project preview images
import expressPreview from "../images/web-design/desktop/image-express.jpg"
import transferPreview from "../images/web-design/desktop/image-transfer.jpg"
import photonPreview from "../images/web-design/desktop/image-photon.jpg"
import builderPreview from "../images/web-design/desktop/image-builder.jpg"
import blogrPreview from "../images/web-design/desktop/image-blogr.jpg"
import campPreview from "../images/web-design/desktop/image-camp.jpg"
// Project categories section mobile images
import appDesignMobile from "../images/home/mobile/image-app-design.jpg"
import graphicDesignMobile from "../images/home/mobile/image-graphic-design.jpg"
// Project categories section tablet images
import appDesignTablet from "../images/home/tablet/image-app-design.jpg"
import graphicDesignTablet from "../images/home/tablet/image-graphic-design.jpg"
// Project categories section desktop images
import appDesignDesktop from "../images/home/desktop/image-app-design.jpg"
import graphicDesignDesktop from "../images/home/desktop/image-graphic-design.jpg"

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
            <img className="absolute -z-2 top-31.5 w-251.5 hidden 2xl:block" src={patternLeaf} alt="" aria-hidden="true"/>
            
            {/* Hero section */}
            <section className="relative flex flex-col items-center z-0 h-80 py-26.25 px-6 bg-peach overflow-hidden md:h-63 md:mx-10 md:py-16 md:px-38.25 md:rounded-2xl 2xl:mx-41 2xl:px-47.75">
                <div className="flex flex-col gap-y-6 text-white text-center max-w-96">
                    <h1 className="text-[2rem] font-medium leading-9 md:text-[2rem] md:leading-12">Web Design</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem]">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
                </div>

                <img className="absolute -z-1 rotate-270 top-35 -right-40 max-w-none md:hidden" src={patternDesignPagesMobile} aria-hidden="true"/>
                <img className="absolute -z-1 -top-43 -right-33 max-w-none hidden md:block 2xl:right-0" src={patternDesignPagesTablet} aria-hidden="true"/>
            </section>

            {/* Projects section */}
            <section className="grid gap-y-10 mx-6 md:gap-y-8 md:mx-10 2xl:grid-cols-3 2xl:gap-x-7.5 2xl:mx-41" aria-label="Projects section">
                <ProjectCard 
                    title={"Express"} 
                    desc={"A multi-carrier shipping website for ecommerce businesses"}
                    image={expressPreview}
                />
                <ProjectCard 
                    title={"Transfer"} 
                    desc={"Site for low-cost money transfers and sending money within seconds"} 
                    image={transferPreview}
                />
                <ProjectCard 
                    title={"Photon"} 
                    desc={"A state-of-the-art music player with high-resolution audio and DSP effects"} 
                    image={photonPreview}
                />
                <ProjectCard 
                    title={"Builder"} 
                    desc={"Connects users with local contractors based on their location"} 
                    image={builderPreview}
                />
                <ProjectCard 
                    title={"Blogr"} 
                    desc={"Blogr is a platform for creating an online blog or publication"} 
                    image={blogrPreview}
                />
                <ProjectCard 
                    title={"Camp"} 
                    desc={"Get expert training in coding, data, design, and digital marketing"} 
                    image={campPreview}
                />
            </section>

            {/* Project categories section */}
            <section className="grid gap-y-6 mx-6 md:mx-10 mb-71.5 md:mb-95 2xl:grid-cols-2 2xl:gap-x-7.5 2xl:mx-41 2xl:h-77" aria-label="Project categories section">
                <ProjectCategoryCard url="app-design" images={appDesignImages} categoryName={"App design"} />
                    
                <ProjectCategoryCard url="graphic-design" images={graphicDesignImages} categoryName={"Graphic design"} />
            </section>
        </main>
    )
}