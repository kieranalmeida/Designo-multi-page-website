import type {JSX} from "react"
import {useState, useRef, useEffect} from "react"
import {Link, NavLink, useLocation} from "react-router-dom"
// Images
import logoDark from "../images/shared/desktop/logo-dark.png"
import openHamburgerButton from "../images/shared/mobile/icon-hamburger.svg"
import closeHamburgerButton from "../images/shared/mobile/icon-close.svg"

export default function Header(): JSX.Element {
    // Controls the state of the hamburger menu
    const [menuOpen, setMenuOpen] = useState(false)
    // Intialize refs that attach to the hamburger menu div and hamburger menu button as null
    const menuRef = useRef<HTMLDivElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    // Returns object containing information about the current Route
    const location = useLocation()
    
    // Handles outside clicks when the hamburger menu is open
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // If menuRef and buttonRef have a .current value (a HTML element), and if they don't contain the element the user clicked on (the click event's .target value) close the hamburger menu. In other words, if a click is detected on an element that isn't a child of the hamburger menu or the hamburger menu button, the menu will close.
            if (
                menuRef.current 
                && !menuRef.current.contains(event.target as Node) 
                && buttonRef.current
                && !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false)
            }
        }
        
        // If the hamburger menu is open, an eventListener is attached to the entire document that listens for clicks and runs handleClickOutside.
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        
        // The cleanup function runs first every time useEffect is triggered or when the component unmounts.
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [menuOpen])
    
    // If the active Route changes and the hamburger menu is open, close it. Additionally, if the active route changes, scroll to the top of the page.
    useEffect( () => {
        if (menuOpen) {
            setMenuOpen(false)
        }
        window.scrollTo(0, 0)

    }, [location.pathname])

    // On the tablet breakpoint and above, the hamburger menu and darkened screen effect are removed automatically if they're currently active
    useEffect( () => {
        // Returns a MediaQueryList object that contains a .matches key, which is a boolean tracking whether or not the screen matches the specified media query
        const mediaQuery = window.matchMedia("(min-width: 768px)")

        // If the .matches key of the event that changed (mediaQuery) is true, set MenuOpen to false
        function handleScreenChange(event: MediaQueryListEvent) {
            if (event.matches) {
                setMenuOpen(false)
            }
        }

        // Add event listener to mediaQuery that listens for changes and runs handleScreenChange (will only trigger when the .matches key changes)
        // When triggered, an event object is created containing the new state of mediaQuery's keys, which is then passed into handleScreenChange where the .matches property is checked
        mediaQuery.addEventListener("change", handleScreenChange)

        // Removes the eventListener when unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleScreenChange)
        }
    }, [])

    // Returns styling for the NavLinks and uses the isActive property provided by React to apply active Link styling
    const navLinkClass = ({isActive}: {isActive: boolean}) => `
        text-black text-[0.875rem] leading-[0.875rem] tracking-[0.125rem] uppercase ${isActive ? "underline": "hover:underline"}
    `

    const hamburgerNavLinkClass = ({isActive}: {isActive: boolean}) => `
        text-white text-[1.5rem] leading-6.25 tracking-0.5 uppercase px-6 p-4 ${isActive ? "bg-peach" : "hover:bg-light-peach"}
    `

    return (
        <>
            <header className="relative z-4 flex justify-between items-center py-8.75 px-6 md:py-16 md:px-9.75 2xl:px-0 2xl:w-277.75 2xl:mx-auto bg-white">
                <Link to="/" aria-label="Go to home page">
                    <img className="w-39.25" src={logoDark} alt="Designo logo"/>
                </Link>

                {/* Hamburger menu button */}
                <button className="cursor-pointer transition p-4 -m-4 rounded-full hover:bg-light-grey md:hidden" aria-label="Toggle navigation menu" onClick={ () => setMenuOpen( (prevMenuOpen) => !prevMenuOpen) } ref={buttonRef}>
                    <img src={menuOpen ? closeHamburgerButton : openHamburgerButton}/>
                </button>

                {/* Nav bar */}
                <nav className="hidden md:flex gap-10.5">
                    <NavLink className={navLinkClass} to="/about" aria-label="Learn more about our company">Our Company</NavLink>
                    <NavLink className={navLinkClass} to="/locations" aria-label="Check what locations we operate in">Locations</NavLink> 
                    <NavLink className={navLinkClass} to="/contact" aria-label="Contact us">Contact</NavLink>
                </nav>
            </header>
            
            {/* Hamburger menu */}
            <div className={`absolute z-4 w-full flex-col py-12 bg-black ${menuOpen ? "flex" : "hidden"}`} ref={menuRef}>
                <NavLink className={hamburgerNavLinkClass} to="/about" aria-label="Learn more about our company">Our Company</NavLink>
                <NavLink className={hamburgerNavLinkClass} to="/locations" aria-label="Check what locations we operate in">Locations</NavLink> 
                <NavLink className={hamburgerNavLinkClass} to="/contact" aria-label="Contact us">Contact</NavLink>
            </div>

            {/* Places a black, transparent background over the entire page, excluding the header and hamburger menu, while the hamburger menu is open */}
            {menuOpen &&
                <div className="fixed z-3 inset-0 bg-black/50"></div>
            }
        </>
    )
}