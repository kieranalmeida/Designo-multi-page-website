import type {JSX} from "react"
import {Link, NavLink} from "react-router-dom"
import logoDark from "../images/shared/desktop/logo-dark.png"
import hamburgerButton from "../images/shared/mobile/icon-hamburger.svg"

export default function Header(): JSX.Element {
    // Returns styling for the NavLinks and uses the isActive property provided by React to apply active Link styling
    const navLinkClass = ({isActive}: {isActive: boolean}) => `
        text-black text-[0.875rem] leading-[0.875rem] tracking-[0.125rem] uppercase hover:cursor-pointer ${isActive ? "underline": "hover:underline"}
    `

    return (
        <header className="flex justify-between items-center py-8.75 px-6 md:py-16 md:px-9.75 md:p 2xl:px-41">
            <Link to="/" aria-label="Go to home page">
                <img className="w-39.25" src={logoDark} alt="Designo logo"/>
            </Link>

            <button className="md:hidden" aria-label="Toggle navigation menu">
                <img src={hamburgerButton} />
            </button> 

            <nav className="hidden md:flex gap-10.5">
                <NavLink className={navLinkClass} to="/about" aria-label="Learn more about our company">Our Company</NavLink>
                <NavLink className={navLinkClass} to="/locations" aria-label="Check what locations we operate in">Locations</NavLink> 
                <NavLink className={navLinkClass} to="/contact" aria-label="Contact us">Contact</NavLink>
            </nav>
        </header>
    )
}