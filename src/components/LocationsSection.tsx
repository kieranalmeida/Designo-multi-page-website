import type {JSX} from "react"
import {Link} from "react-router-dom"
// Images
import illustrationCanada from "../images/shared/desktop/illustration-canada.svg"
import illustrationAustralia from "../images/shared/desktop/illustration-australia.svg"
import illustrationUnitedKingdom from "../images/shared/desktop/illustration-united-kingdom.svg"
import patternSmallCircle from "../images/shared/desktop/bg-pattern-small-circle.svg"

export default function LocationsSection(): JSX.Element {
    return (
            <section className="flex flex-col gap-y-12 mx-6 md:mx-10 2xl:flex-row 2xl:justify-between 2xl:mx-41" aria-label="Our locations">
                <div className="flex flex-col items-center">
                    <div className="relative" aria-hidden="true">
                        <img className="relative z-1" src={illustrationCanada} alt=""/>
                        <img className="absolute top-0" src={patternSmallCircle} alt=""/>
                    </div>

                    <h1 className="text-dark-grey font-medium text-[1.25rem] leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-6">Canada</h1>
                    <Link className="text-white font-medium text-[0.9375rem] tracking-[0.0625rem] py-4 px-4 uppercase bg-peach rounded-md hover:bg-light-peach" to="/locations" aria-label="View our locations">See location</Link>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative" aria-hidden="true">
                        <img className="relative z-1" src={illustrationAustralia} alt=""/>
                        <img className="absolute top-0" src={patternSmallCircle} alt=""/>
                    </div>

                    <h1 className="text-dark-grey font-medium text-[1.25rem] leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-6">Australia</h1>
                    <Link className="text-white font-medium text-[0.9375rem] tracking-[0.0625rem] py-4 px-4 uppercase bg-peach rounded-md hover:bg-light-peach" to="/locations" aria-label="View our locations">See location</Link>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative" aria-hidden="true">
                        <img className="relative z-1" src={illustrationUnitedKingdom} alt=""/>
                        <img className="absolute top-0" src={patternSmallCircle} alt=""/>
                    </div>

                    <h1 className="text-dark-grey font-medium text-[1.25rem] leading-6.5 tracking-[0.3125rem] uppercase mt-12 mb-6">United Kingdom</h1>
                    <Link className="text-white font-medium text-[0.9375rem] tracking-[0.0625rem] py-4 px-4 uppercase bg-peach rounded-md hover:bg-light-peach" to="/locations" aria-label="View our locations">See location</Link>
                </div>
            </section>
    )
}