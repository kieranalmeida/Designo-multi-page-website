import type {JSX} from "react"
import LocationsSection from "./LocationsSection"
// Hero section images
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
// Section four images
import realDealMobile from "../images/about/mobile/image-real-deal.jpg"
import realDealTablet from "../images/about/tablet/image-real-deal.jpg"
import realDealDesktop from "../images/about/desktop/image-real-deal.jpg"
import patternTwoCircles from "../images/shared/desktop/bg-pattern-two-circles.svg"
// Other
import patternLeaf from "../images/shared/desktop/bg-pattern-leaf.svg"

export default function About(): JSX.Element {
    return (
        <main className="relative flex flex-col gap-y-30 2xl:gap-y-40 overflow-hidden">
            <img className="absolute -z-2 w-251.5 top-80 left-0 hidden 2xl:block" src={patternLeaf} alt="" aria-hidden="true"/>

            {/* Hero section */}
            <section className="relative flex flex-col items-center bg-peach overflow-hidden md:mx-10 md:rounded-2xl 2xl:mx-41 2xl:flex-row-reverse 2xl:justify-between 2xl:h-140.5" aria-labelledby="about-us-heading">
                <div className="z-1 w-full 2xl:w-119 2xl:h-full" aria-hidden="true">
                    <img className="w-full h-80 object-cover md:hidden" src={aboutHeroMobile} alt=""/>
                    <img className="w-full h-80 object-cover hidden md:block 2xl:hidden" src={aboutHeroTablet} alt=""/>
                    <img className="w-full h-full object-cover hidden 2xl:block" src={aboutHeroDesktop} alt=""/>
                </div>

                <div className="z-1 flex flex-col gap-y-8 py-20 px-6 text-white text-center h-full md:py-14.5 md:px-16 2xl:justify-center 2xl:w-114.5 2xl:ml-23.75 2xl:p-0 2xl:text-start">
                    <h1 className="text-[2rem] font-medium leading-9.75 md:text-[3rem] md:leading-12" id="about-us-heading">About Us</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem]">Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                </div>

                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <img className="absolute top-55 -right-72 max-w-none md:hidden" src={patternHeroAboutMobile} alt=""/>
                    <img className="absolute -top-28 -left-26 max-w-none hidden md:block 2xl:-top-19 2xl:left-0" src={patternHeroAboutDesktop} alt=""/>
                </div>
            </section>

            {/* Section 2 */}
            <section className="relative flex flex-col items-center bg-seashell overflow-hidden md:mx-10 md:rounded-2xl 2xl:flex-row 2xl:justify-between 2xl:mx-41" aria-labelledby="world-class-talent-heading">
                <div className="z-1 w-full 2xl:w-119" aria-hidden="true">
                    <img className="w-full h-80 object-cover md:hidden" src={worldClassTalentMobile} alt=""/>
                    <img className="w-full h-80 object-cover hidden md:block 2xl:hidden" src={worldClassTalentTablet} alt=""/>
                    <img className="w-119 h-160 object-cover hidden 2xl:block" src={worldClassTalentDesktop} alt=""/>
                </div>

                <div className="z-1 flex flex-col gap-y-6 text-center py-20 px-6 md:py-17 md:px-14.5 2xl:w-111.25 2xl:p-0 2xl:mx-24 2xl:text-left">
                    <h2 className="text-peach text-[2rem] font-medium leading-9 md:text-[2.5rem] md:leading-12" id="world-class-talent-heading">World-class talent</h2>

                    <div className="flex flex-col gap-y-6 text-dark-grey text-[0.9375rem] leading-6.25 md:text-[1rem]">
                        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                        <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.</p>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <img className="absolute -bottom-10 max-w-none md:bottom-11 md:left-40 2xl:bottom-0 2xl:left-82" src={patternThreeCircles} alt=""/>
                </div>
            </section>

            {/* Locations section */}
            <LocationsSection />

            {/* Section 4 */}
            <section className="relative flex flex-col items-center bg-seashell overflow-hidden mb-77.5 md:mx-10 md:rounded-2xl 2xl:flex-row-reverse 2xl:justify-between 2xl:mx-41 md:mb-95" aria-labelledby="the-real-deal-heading">
                <div className="z-1 w-full 2xl:w-119" aria-hidden="true">
                    <img className="w-full h-80 object-cover md:hidden" src={realDealMobile} alt=""/>
                    <img className="w-full h-80 object-cover hidden md:block 2xl:hidden" src={realDealTablet} alt=""/>
                    <img className="w-119 h-160 object-cover hidden 2xl:block" src={realDealDesktop} alt=""/>
                </div>

                <div className="z-1 flex flex-col gap-y-6 text-center py-20 px-6 2xl:w-111.25 2xl:mx-23.25 2xl:p-0 2xl:text-start">
                    <h2 className="text-peach text-[2rem] font-medium leading-9 md:text-[2.5rem] md:leading-12" id="the-real-deal-heading">The real deal</h2>

                    <div className="flex flex-col gap-y-6 text-dark-grey text-[0.9375rem] leading-6.25 md:text-[1rem]">
                        <p>As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                        <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <img className="absolute -bottom-10 -right-12 max-w-none md:right-0 md:bottom-11 2xl:hidden" src={patternThreeCircles} alt=""/>
                    <img className="absolute bottom-0 left-0 max-w-none hidden 2xl:block" src={patternTwoCircles} alt=""/>
                </div>
            </section>

            <img className="absolute -z-2 w-251.5 bottom-192 -right-70 rotate-180 hidden 2xl:block" src={patternLeaf} alt="" aria-hidden="true"/>
        </main>
    )
}