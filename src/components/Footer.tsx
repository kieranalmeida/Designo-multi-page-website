import type {JSX} from "react"
import {Link, useLocation} from "react-router-dom"
// Images
import patternCallToAction from "../images/shared/desktop/bg-pattern-call-to-action.svg"
import logoLight from "../images/shared/desktop/logo-light.png"
import facebookIcon from "../images/shared/desktop/icon-facebook.svg"
import youtubeIcon from "../images/shared/desktop/icon-youtube.svg"
import twitterIcon from "../images/shared/desktop/icon-twitter.svg"
import pinterestIcon from "../images/shared/desktop/icon-pinterest.svg"
import instagramIcon from "../images/shared/desktop/icon-instagram.svg"

export default function Footer(): JSX.Element {
    const location = useLocation()

    const footerClass = `
        relative flex flex-col items-center 
        ${location.pathname !== "/contact" ? "pt-63.25 md:pt-41.5 2xl:pt-36" : "pt-16 md:pt-20 2xl:pt-18"}
        px-6 pb-16 md:px-10 md:pb-20 2xl:px-41 xl:pb-18 bg-black
    `

    return (
        <footer className={footerClass}>
        {/* Top part of footer */}
        {location.pathname !== "/contact" &&
            <div className="absolute z-1 -top-50 left-6 right-6 flex flex-col items-center py-16 px-6 bg-peach rounded-2xl overflow-hidden md:-top-60 md:left-10 md:right-10 md:py-14.25 md:px-14.5 2xl:-top-55 2xl:flex-row 2xl:justify-between 2xl:pt-18 2xl:px-24 2xl:left-41 2xl:right-41 ">
                <div className="max-w-114.75 text-white text-center 2xl:text-left">
                    <h2 className="text-[2rem] font-medium leading-9 md:text-[2.5rem] md:leading-10">Let's talk about your project</h2>
                    <p className="text-[0.9375rem] leading-6.25 mt-6 mb-8 md:text-[1rem] 2xl:mb-0">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>

                <Link className="text-dark-grey text-[0.9375rem] font-medium tracking-0.25 uppercase py-4.25 px-4.75 bg-white rounded-md hover:text-white hover:bg-light-peach focus:outline-none focus:ring-2 focus:ring-black" to="/contact" aria-label="Contact us">
                    Get in touch
                </Link>
                
                <img className="absolute -z-1 max-w-none -right-80 -bottom-36 md:-right-38 2xl:right-0" src={patternCallToAction}/>
            </div>
        }

            {/* Main footer */}
            <div className="flex flex-col gap-y-10 w-full">
                {/* Main footer first half */}
                <div className="flex flex-col items-center gap-y-8 md:flex-row md:justify-between">
                    <Link to="/" aria-label="Go to home page">
                        <img className="w-39.25 " src={logoLight} alt="Designo logo"/>
                    </Link>

                    <hr className="w-full border-[#979797] opacity-30 md:hidden"/>

                    <div className="flex flex-col items-center gap-y-8 text-white text-[0.875rem] leading-3.5 tracking-[0.125rem] uppercase md:flex-row md:gap-x-10.5">
                        <Link className="hover:underline" to="/about" aria-label="Learn more about our company">Our company</Link>
                        <Link className="hover:underline" to="/locations" aria-label="Check what locations we operate in">Locations</Link>
                        <Link className="hover:underline" to="/contact" aria-label="Contact us">Contact</Link>
                    </div>
                </div>

                <hr className="w-full border-[#979797] opacity-30 hidden md:block"/>

                {/* Main footer second half */}
                <div className="flex flex-col gap-y-10 text-white md:flex-row md:justify-between">

                    <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-15 2xl:gap-x-43.75">
                        <div className="flex flex-col text-center leading-6.5 opacity-50 md:text-start">
                            <h2 className="font-bold">Designo Central Office</h2>
                            <p>3886 Wellington Street</p>
                            <p>Toronto, Ontario M9C 3J5</p>
                        </div>

                        <div className="flex flex-col text-center leading-6.5 opacity-50 md:text-start">
                            <h2 className="font-bold">Contact Us (Central Office)</h2>
                            <p>P : +1 253-863-8967</p>
                            <p>M : contact@designo.co</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center gap-x-4 md:items-end">
                        <a className="hover:brightness-140" href="https://www.facebook.com/" aria-label="View our Facebook page">
                            <img src={facebookIcon}/>
                        </a>

                        <a className="hover:brightness-140" href="https://www.youtube.com/" aria-label="View our Youtube page">
                            <img src={youtubeIcon}/>
                        </a>

                        <a className="hover:brightness-140" href="https://x.com/home" aria-label="View our Twitter page">
                            <img src={twitterIcon}/>
                        </a>

                        <a className="hover:brightness-140" href="https://pinterest.com/" aria-label="View our Pinterest page">
                            <img src={pinterestIcon}/>
                        </a>

                        <a className="hover:brightness-140" href="https://www.instagram.com/" aria-label="View our Instagram page">
                            <img src={instagramIcon}/>
                        </a>                                                                                              
                    </div>

                </div>
                
            </div>
        </footer >
    )
}