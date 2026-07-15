import {useLocation} from "react-router-dom"
import {useRef, useEffect} from "react"
import type {JSX} from "react"
import Map from "./Map.tsx"
import patternThreeCircles from "../images/shared/desktop/bg-pattern-three-circles.svg"

export default function Locations(): JSX.Element {
    // Get information about the current route and store location.state if it exists (it is passed in when clicking on "View Locations" in one of the LocationSection instances)
    const location = useLocation()
    const targetLocation = location.state?.location

    // These refs attach to each of the three location containers and serve as anchor points to call .scrollIntoView on
    const canRef = useRef<HTMLDivElement | null>(null)
    const auRef = useRef<HTMLDivElement | null>(null)
    const ukRef = useRef<HTMLDivElement | null>(null)

    // If targetLocation exists, scroll to it when the page renders
    useEffect( () => {
        if (!targetLocation) { return }

        // Links each of the possible targetLocation values to the matching ref
        const map = {
            can: canRef,
            au: auRef,
            uk: ukRef
        }

        // targetRef is found by checking the map object for a key that matches the targetLocation name passed in (can, au, or uk) which returns the matching ref ("as keyof typeof map" is to satify TypeScript)
        const targetRef = map[targetLocation as keyof typeof map]
        
        // If targetRef exists, scroll to it smoothly
        targetRef?.current?.scrollIntoView({ behavior: "smooth" }) 

    }, [targetLocation])

    return (
        <main className="" aria-label="Our locations">
            <section className="flex flex-col gap-y-10 md:gap-y-30 2xl:gap-y-8 mb-77.5 md:mx-10 md:mb-95 2xl:w-277.75 2xl:mx-auto">
                {/* Canada location */}
                <div className="flex flex-col md:gap-y-7.5 2xl:flex-row-reverse 2xl:justify-between" ref={canRef}>
                    {/* Container 1 */}
                    <div className="z-1 w-full h-80 md:h-81.5 2xl:w-87.5 rounded-2xl overflow-hidden" id="canada-map">
                        <Map coords={[43.710454, -79.248552]}/>
                    </div>
                    
                    {/* Container 2 */}
                    <div className="relative flex flex-col items-center gap-y-6 md:items-start 2xl:w-182.5 px-6 py-20 md:px-18.75 md:py-22 bg-seashell overflow-hidden md:rounded-2xl">
                        <h2 className="z-1 text-peach text-[2rem] font-medium leading-9 md:text-[2.5rem] md:leading-12">Canada</h2>

                        <div className="z-1 flex flex-col gap-y-6 md:flex-row md:gap-x-27.75 w-full text-center md:text-start">
                            <div className="text-dark-grey text-[0.9375rem] leading-6.5">
                                <h2 className="font-bold">Designo Central Office</h2>
                                <p>3886 Wellington Street</p>
                                <p>Toronto, Ontario M9C 3J5</p>
                            </div>

                            <div className="text-dark-grey text-[0.9375rem] leading-6.5">
                                <h2 className="font-bold">Contact</h2>
                                <p>P : +1 253-863-8967</p>
                                <p>M : contact@designo.co</p>
                            </div>
                        </div>

                        <img className="absolute left-0 top-0 md:top-auto md:bottom-0 max-w-none pointer-events-none" src={patternThreeCircles} alt="" aria-hidden="true"/>
                    </div>
                </div>

                {/* Australia location */}
                <div className="flex flex-col md:gap-y-7.5 2xl:flex-row 2xl:justify-between" ref={auRef}>
                    {/* Container 1 */}
                    <div className="z-1 w-full h-80 md:h-81.5 2xl:w-87.5 rounded-2xl overflow-hidden" id="canada-map">
                        <Map coords={[-33.124834, 151.582762]}/>
                    </div>
                    
                    {/* Container 2 */}
                    <div className="relative flex flex-col items-center gap-y-6 md:items-start 2xl:w-182.5 px-6 py-20 md:px-18.75 md:py-22 bg-seashell overflow-hidden md:rounded-2xl">
                        <h2 className="z-1 text-peach text-[2rem] font-medium leading-9 md:text-[2.5rem] md:leading-12">Australia</h2>

                        <div className="z-1 flex flex-col gap-y-6 md:flex-row md:gap-x-27.75 w-full text-center md:text-start">
                            <div className="text-dark-grey text-[0.9375rem] leading-6.5">
                                <h2 className="font-bold">Designo AU Office</h2>
                                <p>19 Balonne Street</p>
                                <p>New South Wales 2443</p>
                            </div>

                            <div className="text-dark-grey text-[0.9375rem] leading-6.5">
                                <h2 className="font-bold">Contact</h2>
                                <p>P : (02) 6720 9092</p>
                                <p>M : contact@designo.au</p>
                            </div>
                        </div>

                        <img className="absolute left-0 top-0 md:top-auto md:bottom-0 max-w-none pointer-events-none" src={patternThreeCircles} alt="" aria-hidden="true"/>
                    </div>
                </div>

                {/* United Kingdom location */}
                <div className="flex flex-col md:gap-y-7.5 2xl:flex-row-reverse 2xl:justify-between" ref={ukRef}>
                    {/* Container 1 */}
                    <div className="z-1 w-full h-80 md:h-81.5 2xl:w-87.5 rounded-2xl overflow-hidden" id="canada-map">
                        <Map coords={[53.733378, -1.331442]}/>
                    </div>
                    
                    {/* Container 2 */}
                    <div className="relative flex flex-col items-center gap-y-6 md:items-start 2xl:w-182.5 px-6 py-20 md:px-18.75 md:py-22 bg-seashell overflow-hidden md:rounded-2xl">
                        <h2 className="z-1 text-peach text-[2rem] font-medium leading-9 md:text-[2.5rem] md:leading-12">United Kingdom</h2>

                        <div className="z-1 flex flex-col gap-y-6 md:flex-row md:gap-x-27.75 w-full text-center md:text-start">
                            <div className="text-dark-grey text-[0.9375rem] leading-6.5">
                                <h2 className="font-bold">Designo UK Office</h2>
                                <p>13 Colorado Way</p>
                                <p>Rhyd-y-fro SA8 9GA</p>
                            </div>

                            <div className="text-dark-grey text-[0.9375rem] leading-6.5">
                                <h2 className="font-bold">Contact</h2>
                                <p>P : 078 3115 1400</p>
                                <p>M : contact@designo.uk</p>
                            </div>
                        </div>

                        <img className="absolute left-0 top-0 md:top-auto md:bottom-0 max-w-none pointer-events-none" src={patternThreeCircles} alt="" aria-hidden="true"/>
                    </div>
                </div>
            </section>
        </main>
    )
}