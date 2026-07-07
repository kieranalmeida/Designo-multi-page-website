import type {JSX} from "react"
import {Link} from "react-router-dom"
// Hero images
import aboutHeroMobile from "../images/about/mobile/image-about-hero.jpg"
import aboutHeroTablet from "../images/about/tablet/image-about-hero.jpg"
import aboutHeroDesktop from "../images/about/desktop/image-about-hero.jpg"
import patternHeroAboutMobile from "../images/about/mobile/bg-pattern-hero-about-mobile.svg"
import patternHeroAboutDesktop from "../images/about/desktop/bg-pattern-hero-about-desktop.svg"
// Section two images
import worldClassTalentMobile from "../images/about/mobile/image-world-class-talent.jpg"
import worldClassTalentTablet from "../images/about/tablet/image-world-class-talent.jpg"
import worldClassTalentDesktop from "../images/about/desktop/image-world-class-talent.jpg"
import patternThreeCircles from "../images/shared/desktop/bg-pattern-three-circles.svg"
// Location images
import illustrationCanada from "../images/shared/desktop/illustration-canada.svg"
import illustrationAustralia from "../images/shared/desktop/illustration-australia.svg"
import illustrationUnitedKingdom from "../images/shared/desktop/illustration-united-kingdom.svg"
// Section four images
import realDealMobile from "../images/about/mobile/image-real-deal.jpg"
import realDealTablet from "../images/about/tablet/image-real-deal.jpg"
import realDealDesktop from "../images/about/desktop/image-real-deal.jpg"
// Other
import patternSmallCircle from "../images/shared/desktop/bg-pattern-small-circle.svg"
import patternTwoCircles from "../images/shared/desktop/bg-pattern-two-circles.svg"
import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"

export default function About(): JSX.Element {
    return (
        <main className="relative flex flex-col gap-y-30 2xl:gap-y-40">
            <img className="absolute -z-2 w-251.5 top-80 left-0 hidden 2xl:block" src={patternLeaf} alt=""/>
            
            {/* Hero section */}
            <section className="relative flex flex-col items-center bg-peach overflow-hidden md:mx-10 md:rounded-2xl 2xl:mx-41 2xl:flex-row-reverse 2xl:justify-between 2xl:h-140.5" aria-label="Hero section">
                <div className="z-1 w-full 2xl:w-119 2xl:h-full">
                    <img className="w-full h-80 object-cover md:hidden" src={aboutHeroMobile}/>
                    <img className="w-full h-80 object-cover hidden md:block 2xl:hidden" src={aboutHeroTablet}/>
                    <img className="w-full h-full object-cover hidden 2xl:block" src={aboutHeroDesktop}/>
                </div>

                <div className="z-1 flex flex-col gap-y-8 py-20 px-6 text-white text-center h-full md:py-14.5 md:px-16 2xl:justify-center 2xl:w-114.5 2xl:ml-23.75 2xl:p-0 2xl:text-start">
                    <h1 className="text-[2rem] font-medium leading-9.75 md:text-[3rem] md:leading-12">About Us</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem]">Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                </div>

                <div className="absolute inset-0" aria-hidden="true">
                    <img className="absolute top-55 -right-72 max-w-none md:hidden" src={patternHeroAboutMobile}/>
                    <img className="absolute -top-28 -left-26 max-w-none hidden md:block 2xl:-top-19 2xl:left-0" src={patternHeroAboutDesktop}/>
                </div>
            </section>

            {/* Section 3 */}
            <section className="relative flex flex-col items-center bg-[#FDF3F0] overflow-hidden md:mx-10 md:rounded-2xl 2xl:flex-row 2xl:justify-between 2xl:mx-41" aria-label="World-class talent section">
                <div className="z-1 w-full 2xl:w-119 ">
                    <img className="w-full h-80 object-cover md:hidden" src={worldClassTalentMobile}/>
                    <img className="w-full h-80 object-cover hidden md:block 2xl:hidden" src={worldClassTalentTablet}/>
                    <img className="w-119 h-160 object-cover hidden 2xl:block" src={worldClassTalentDesktop}/>
                </div>

                <div className="z-1 flex flex-col gap-y-6 text-center py-20 px-6 md:py-17 md:px-14.5 2xl:w-111.25 2xl:p-0 2xl:mx-24 2xl:text-left">
                    <h2 className="text-peach text-[2rem] font-medium leading-9 md:text-[2.5rem] md:leading-12">World-class talent</h2>

                    <div className="flex flex-col gap-y-6 text-dark-grey text-[0.9375rem] leading-6.25 md:text-[1rem]">
                        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                        <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.</p>
                    </div>
                </div>

                <div className="absolute inset-0" aria-hidden="true">
                    <img className="absolute -bottom-10 max-w-none md:bottom-11 md:left-40 2xl:bottom-0 2xl:left-82" src={patternThreeCircles}/>
                </div>
            </section>

            {/* Locations section */}
            <section className="flex flex-col gap-y-12 mx-6 md:mx-10 2xl:flex-row 2xl:justify-between 2xl:mx-41" aria-label="Locations section">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img className="relative z-1" src={illustrationCanada}/>
                        <img className="absolute top-0" src={patternSmallCircle}/>
                    </div>

                    <h1 className="text-dark-grey font-medium text-[1.25rem] leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-6" >Canada</h1>
                    <Link className="text-white font-medium text-[0.9375rem] tracking-[0.0625rem] py-4 px-4 uppercase bg-peach rounded-md hover:bg-light-peach" to="/locations">See location</Link>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img className="relative z-1" src={illustrationAustralia}/>
                        <img className="absolute top-0" src={patternSmallCircle}/>
                    </div>

                    <h1 className="text-dark-grey font-medium text-[1.25rem] leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-6" >Australia</h1>
                    <Link className="text-white font-medium text-[0.9375rem] tracking-[0.0625rem] py-4 px-4 uppercase bg-peach rounded-md hover:bg-light-peach" to="/locations">See location</Link>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img className="relative z-1" src={illustrationUnitedKingdom}/>
                        <img className="absolute top-0" src={patternSmallCircle}/>
                    </div>

                    <h1 className="text-dark-grey font-medium text-[1.25rem] leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-6" >United Kingdom</h1>
                    <Link className="text-white font-medium text-[0.9375rem] tracking-[0.0625rem] py-4 px-4 uppercase bg-peach rounded-md hover:bg-light-peach" to="/locations">See location</Link>
                </div>
            </section>

            {/* Section 4 */}
            <section className="relative flex flex-col items-center bg-[#FDF3F0] overflow-hidden mb-77.5 md:mx-10 md:rounded-2xl 2xl:flex-row-reverse 2xl:justify-between 2xl:mx-41 md:mb-95" aria-label="The real deal section">
                <div className="z-1 w-full 2xl:w-119">
                    <img className="w-full h-80 object-cover md:hidden" src={realDealMobile}/>
                    <img className="w-full h-80 object-cover hidden md:block 2xl:hidden" src={realDealTablet}/>
                    <img className="w-119 h-160 object-cover hidden 2xl:block" src={realDealDesktop}/>
                </div>

                <div className="flex flex-col gap-y-6 text-center py-20 px-6 2xl:w-111.25 2xl:mx-23.25 2xl:p-0 2xl:text-start">
                    <h2 className="text-peach text-[2rem] font-medium leading-9 md:text-[2.5rem] md:leading-12">The real deal</h2>

                    <div className="flex flex-col gap-y-6 text-dark-grey text-[0.9375rem] leading-6.25 md:text-[1rem]">
                        <p>As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                        <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                    </div>
                </div>

                <div className="absolute inset-0">
                    <img className="absolute -bottom-10 -right-12 max-w-none md:right-0 md:bottom-11 2xl:hidden" src={patternThreeCircles}/>
                    <img className="absolute bottom-0 left-0 max-w-none hidden 2xl:block" src={patternTwoCircles}/>
                </div>
            </section>

            <img className="absolute -z-5 w-251.5 bottom-192 -right-70 rotate-180 hidden 2xl:block" src={patternLeaf} alt=""/>
        </main>
    )
}

// Accessibility, focus
// Inset
// Cleanup/refactor