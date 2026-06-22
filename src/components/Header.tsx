import type {JSX} from "react"
import {Link, NavLink} from "react-router-dom"
import logoDark from "../images/shared/desktop/logo-dark.png" // Import dark version of logo (for Header)
import hamburgerButton from "../images/shared/mobile/icon-hamburger.svg"

export default function Header(): JSX.Element {
    // Returns styling for the NavLinks and uses the isActive property from React to apply active Link styling
    const navLinkClass = ({isActive}: {isActive: boolean}) => `
        text-black text-[0.875rem] leading-[3.5px] tracking-[2px] uppercase hover:cursor-pointer hover:scale-105 transition ${isActive ? "underline": "hover:underline"}
    `
    return (
        <header className="flex justify-between items-center py-8.75 px-6 md:py-16 md:px-9.75 md:p xl:px-41.25">
            <Link to="/">
                <img className="w-39.25" src={logoDark}/>
            </Link>

            <button className="md:hidden">
                <img src={hamburgerButton} />
            </button> 

            <nav className="hidden md:flex gap-10.5">
                <NavLink className={navLinkClass} to="/about">Our Company</NavLink>
                <NavLink className={navLinkClass} to="/locations">Locations</NavLink> 
                <NavLink className={navLinkClass} to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}