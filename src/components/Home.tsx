import type {JSX} from "react"
import {Link} from "react-router-dom"
// Hero section images
import patternHeroHome from "../images/home/desktop/bg-pattern-hero-home.svg"
import heroPhone from "../images/home/desktop/image-hero-phone.png"
// Mobile images
import webDesignMobile from "../images/home/mobile/image-web-design.jpg"
import appDesignMobile from "../images/home/mobile/image-app-design.jpg"
import graphicDesignMobile from "../images/home/mobile/image-graphic-design.jpg"
// Tablet images
import webDesignTablet from "../images/home/tablet/image-web-design.jpg"
import appDesignTablet from "../images/home/tablet/image-app-design.jpg"
import graphicDesignTablet from "../images/home/tablet/image-graphic-design.jpg"
// Desktop images
import webDesignDesktop from "../images/home/desktop/image-web-design-large.jpg"
import appDesignDesktop from "../images/home/desktop/image-app-design.jpg"
import graphicDesignDesktop from "../images/home/desktop/image-graphic-design.jpg"
// Components
import ProjectCard from "./ProjectCard"

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

const graphicDesignImages = {
    mobile: graphicDesignMobile,
    tablet: graphicDesignTablet,
    desktop: graphicDesignDesktop
}


export default function Home(): JSX.Element {
    return (
        <main className="flex flex-col gap-y-40 mb-30">
            {/* Hero section */}
            <section className="relative flex flex-col items-center h-210.75 pt-20 px-6 bg-peach overflow-hidden md:mx-10 md:pt-15 md:px-14.5 md:rounded-2xl 2xl:flex-row 2xl:items-start 2xl:gap-x-10 2xl:h-160 2xl:mx-41 2xl:pt-36.25 2xl:px-26.25">
                <div className="z-10 flex flex-col items-center text-center text-white 2xl:items-start 2xl:text-left">
                    <h1 className="text-[2rem] font-medium leading-9 max-w-135 md:text-[3rem] md:leading-12">Award-winning custom designs and digital brand solutions</h1>
                    <p className="text-[0.9375rem] leading-6.25 max-w-111.25 mt-6 md:text-[1rem] md:leading-6.5">
                        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                    </p>

                    <div className="mt-5 2xl:mt-10">
                        <Link className="text-dark-grey text-[0.9375rem] font-medium leading-px uppercase py-4.5 px-6.25 bg-white rounded-md transition hover:text-white hover:bg-light-peach" to="/about">
                            Learn more
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img className="absolute z-10 top-75 max-w-none aria-hidden md:top-72 2xl:-right-20 2xl:-top-8" src={heroPhone}/>
                    <img className="absolute z-0 -right-56 top-25 max-w-none aria-hidden md:-right-21 2xl:right-0 2xl:top-0" src={patternHeroHome}/>
                </div>
            </section>

            {/* Projects section */}
            <section className="mx-6 md:mx-10 2xl:mx-41 grid gap-y-6 2xl:grid-cols-2 2xl:grid-rows-2 2xl:gap-x-7.5 2xl:h-160">

                {/* The three product cards display in a column on mobile and tablet screen sizes. For desktop and above, two columns with two rows are created, with the first card taking the first column and spanning both rows, and the other two evenly stacking in the other column by default. The cards grow in height up to the grid's height limit of 640px. */}
                <div className="2xl:row-span-2">
                    <ProjectCard images={webDesignImages }>Web design</ProjectCard>
                </div>

                <ProjectCard images={appDesignImages}>App design</ProjectCard>
                
                <ProjectCard images={graphicDesignImages}>Graphic design</ProjectCard>

            </section>
        </main>
    )
}
