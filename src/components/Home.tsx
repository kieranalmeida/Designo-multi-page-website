import type {JSX} from "react"
import {Link} from "react-router-dom"
// Components
import ProjectCategoryCard from "./ProjectCategoryCard"
// Hero section images
import patternHeroHome from "../images/home/desktop/bg-pattern-hero-home.svg"
import heroPhone from "../images/home/desktop/image-hero-phone.png"
// Project categories section images
import {webDesignImages, appDesignImages, graphicDesignImages} from "../data/project-category-card-images"
// About section images
import illustrationPassionate from "../images/home/desktop/illustration-passionate.svg"
import illustrationFriendly from "../images/home/desktop/illustration-friendly.svg"
import illustrationResourceful from "../images/home/desktop/illustration-resourceful.svg"
import patternSmallCircle from "../images/shared/desktop/bg-pattern-small-circle.svg"
// Other images
import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"

export default function Home(): JSX.Element {
    return (
        <main className="relative flex flex-col gap-y-30 2xl:gap-y-40" aria-label="Hero section">
            <img className="absolute -z-2 left-0 top-80 pointer-events-none hidden 2xl:block" src={patternLeaf} alt="" aria-hidden="true"/>

            {/* Hero section */}
            <section className="relative flex flex-col items-center overflow-hidden 2xl:flex-row 2xl:items-start 2xl:gap-x-10 h-210.75 2xl:h-160 md:mx-10 2xl:w-277.75 2xl:mx-auto pt-20 px-6 md:pt-15 md:px-14.5 2xl:pt-36.25 2xl:px-26.25 bg-peach md:rounded-2xl">
                <div className="z-2 flex flex-col items-center 2xl:items-start text-center 2xl:text-left text-white">
                    <h1 className="max-w-134 text-[2rem] font-medium leading-9 md:text-[3rem] md:leading-12">Award-winning custom designs and digital brand solutions</h1>
                    <p className="max-w-111.25 mt-7.75 mb-6 md:mt-9 md:mb-4.75 2xl:mt-9.75 2xl:mb-10 text-[0.9375rem] leading-6.25 md:text-[1rem] md:leading-6.5">
                        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                    </p>

                    <Link className="text-dark-grey text-[0.9375rem] font-medium tracking-[0.0625rem] uppercase py-4.5 px-6.25 bg-white rounded-md hover:text-white hover:bg-light-peach focus:outline-none focus:ring-2 focus:ring-black" to="/about" aria-label="Learn more about our company">
                        Learn more
                    </Link>
                </div>

                <div className="absolute inset-0 pointer-events-none flex justify-center">
                    <img className="absolute z-1 max-w-none top-75 md:top-72 2xl:-right-20 2xl:-top-8" src={heroPhone} alt="Example of a website design displayed on a mobile phone"/>
                    <img className="absolute max-w-none -right-56 top-25 md:-right-21 2xl:right-0 2xl:top-0" src={patternHeroHome} alt="" aria-hidden="true"/>
                </div>
            </section>

            {/* Project categories section */}
            <section className="grid gap-y-6 mx-6 md:mx-10 2xl:w-277.75 2xl:mx-auto 2xl:grid-cols-2 2xl:grid-rows-2 2xl:gap-x-7.5 2xl:h-160" aria-label="Project categories section">
                {/* The three project category cards display in a column on mobile and tablet screen sizes. For desktop and above, two columns with two rows are created, with the first card taking the first column and spanning both rows, and the other two evenly stacking in the other column by default. The cards grow in height up to the grid's height limit of 640px. */}
                <div className="2xl:row-span-2">
                    <ProjectCategoryCard url="web-design" images={webDesignImages} categoryName={"Web design"}/>
                </div>

                <ProjectCategoryCard url="app-design" images={appDesignImages} categoryName={"App design"}/>
                
                <ProjectCategoryCard url="graphic-design" images={graphicDesignImages} categoryName={"Graphic design"}/>

            </section>

            {/* About section */}
            <section className="relative flex flex-col gap-y-20 mx-6 mb-77.75 md:gap-y-8 md:mx-10 md:mb-82.75 2xl:flex-row 2xl:gap-x-8 2xl:w-277.75 2xl:mx-auto 2xl:mb-95" aria-label="About section">

                    <div className="relative flex flex-col items-center md:flex-row md:gap-x-12 2xl:flex-col">
                        <img src={illustrationPassionate}/>
                        <img className="absolute -z-1 top-0" src={patternSmallCircle} alt="" aria-hidden="true"/>

                        <div className="text-dark-grey text-center md:text-start 2xl:text-center">
                            <h2 className="text-[1.25rem] font-medium leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-8 md:mt-0 md:mb-4 2xl:mt-12 2xl:mb-8">Passionate</h2>
                            <p className="leading-6.5">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center md:flex-row md:gap-x-12 2xl:flex-col">
                        <img src={illustrationResourceful}/>
                        <img className="absolute -z-1 top-0" src={patternSmallCircle} alt="" aria-hidden="true"/>

                        <div className="text-dark-grey text-center md:text-start 2xl:text-center">
                            <h2 className="text-[1.25rem] font-medium leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-8 md:mt-0 md:mb-4 2xl:mt-12 2xl:mb-8">Resourceful</h2>
                            <p className="leading-6.5">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.</p>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center md:flex-row md:gap-x-12 2xl:flex-col">
                        <img src={illustrationFriendly}/>
                        <img className="absolute -z-1 top-0" src={patternSmallCircle} alt="" aria-hidden="true"/>

                        <div className="text-dark-grey text-center md:text-start 2xl:text-center">
                            <h2 className="text-[1.25rem] font-medium leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-8 md:mt-0 md:mb-4 2xl:mt-12 2xl:mb-8">Friendly</h2>
                            <p className="leading-6.5">We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                        </div>
                    </div>

            </section>

            <img className="absolute -z-2 right-0 bottom-18.5 rotate-180 pointer-events-none hidden 2xl:block" src={patternLeaf} alt="" aria-hidden="true"/>
        </main>
    )
}