import type {JSX} from "react"
// Hero images
import aboutHeroMobile from "../images/about/mobile/image-about-hero.jpg"
import aboutHeroTablet from "../images/about/tablet/image-about-hero.jpg"
import aboutHeroDesktop from "../images/about/desktop/image-about-hero.jpg"
import patternHeroAboutMobile from "../images/about/mobile/bg-pattern-hero-about-mobile.svg"
import patternHeroAboutDesktop from "../images/about/desktop/bg-pattern-hero-about-desktop.svg"
// Other
// import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"

export default function About(): JSX.Element {
    return (
        <main className="relative flex flex-col gap-y-30 2xl:gap-y-40" aria-label="Hero section">
            <section className="relative flex flex-col items-center bg-peach overflow-hidden md:mx-10 2xl:h 2xl:mx-41 md:rounded-2xl 2xl:flex-row-reverse 2xl:justify-between 2xl:h-140.5">
                <img className="z-1 w-full object-cover max-h-80 md:hidden" src={aboutHeroMobile}/>
                <img className="z-1 w-full object-cover max-h-80 hidden md:block 2xl:hidden" src={aboutHeroTablet}/>
                <img className="z-1 w-119 h-full object-cover hidden 2xl:block" src={aboutHeroDesktop}/>

                <div className="z-1 flex flex-col gap-y-8 py-20 px-6 text-white text-center h-full md:py-14.5 md:px-16 2xl:justify-center 2xl:w-114.5 2xl:ml-23.75 2xl:p-0 2xl:text-start ">
                    <h1 className="text-[2rem] font-medium leading-9.75 md:text-[3rem] md:leading-12">About Us</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem]">Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                </div>

                <img className="absolute max-w-none top-55 -right-72 md:hidden" src={patternHeroAboutMobile}/>
                <img className="absolute max-w-none -top-28 -left-26 hidden md:block 2xl:-top-19 2xl:left-0" src={patternHeroAboutDesktop}/>
            </section>

            <section></section>

            <section></section>

            <section></section>
        </main>
    )
}