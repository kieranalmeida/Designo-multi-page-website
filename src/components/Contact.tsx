import type {JSX} from "react"
import LocationsSection from "./LocationsSection"
// Images
import patternTwoCircles from "../images/shared/desktop/bg-pattern-two-circles.svg"
import patternHeroHome from "../images/home/desktop/bg-pattern-hero-home.svg"

// "Can't be empty" + icon if input is 
// "Please use a valid email address" Only accept valid email

function handleSubmit() {
    console.log("Form submitted")
}

export default function Contact(): JSX.Element {
    return (
        <main className="flex flex-col gap-y-30 2xl:gap-y-40">
            <section className="relative flex flex-col items-center 2xl:flex-row 2xl:justify-between gap-y-12 bg-peach overflow-hidden md:mx-10 2xl:mx-41 px-6 py-18 md:px-14.5 md:py-17.75 2xl:px-23.75 2xl:py-13.55 md:rounded-2xl">
                <div className="z-1 flex flex-col gap-y-6 text-white text-center md:text-start 2xl:w-111.25">
                    <h1 className="text-[2rem] font-medium leading-9 md:text-[3rem] md:leading-12">Contact Us</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem] md:leading-6.5">Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
                </div>

                <form className="z-1 flex flex-col gap-y-10 w-full text-white 2xl:w-95" action={handleSubmit}>
                    <div className="flex flex-col gap-y-6.25">
                        <input
                            className="pl-3.75 pb-2.75 border-b border-white placeholder-white/50 text-[0.9375rem] font-medium leading-6.5 focus:outline-none focus:placeholder-white focus:shadow-[0_2px_0_0_white]"
                            type="text"
                            placeholder="Name"
                            required
                        />
                        <input
                            className="pl-3.75 pb-2.75 border-b border-white placeholder-white/50 text-[0.9375rem] font-medium leading-6.5 focus:outline-none focus:placeholder-white focus:shadow-[0_2px_0_0_white]" 
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        <input
                            className="pl-3.75 pb-2.75 border-b border-white placeholder-white/50 text-[0.9375rem] font-medium leading-6.5 focus:outline-none focus:placeholder-white focus:shadow-[0_2px_0_0_white]" 
                            type="number"
                            placeholder="Phone"
                        />
                        <textarea
                            className="pl-3.75 pb-19 border-b border-white resize-none placeholder-white/50 text-[0.9375rem] font-medium leading-6.5 focus:outline-none focus:placeholder-white focus:shadow-[0_2px_0_0_white]"
                            placeholder="Your Message"
                            required
                        />
                    </div>

                    <button 
                        className="w-38 mx-auto md:ml-auto md:mr-0 py-4.5 bg-white rounded-md text-black text-[0.9375rem] font-medium tracking-[0.0625rem] uppercase cursor-pointer hover:bg-light-peach hover:text-white focus:outline-none focus:ring-2 focus:ring-black">    
                        Submit
                    </button>
                </form>

                <div className="absolute flex flex-col items-center inset-0 pointer-events-none" aria-hidden="true">
                    <img className="absolute top-0 max-w-none md:hidden" src={patternTwoCircles} alt=""/>
                    <img className="absolute bottom-38.5 -left-40 2xl:bottom-0 2xl:left-0 max-w-none hidden md:block" src={patternHeroHome} alt=""/>
                </div>
            </section>

            <LocationsSection />
        </main>
    )
}
