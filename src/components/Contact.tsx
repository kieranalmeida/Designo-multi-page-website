import {useState} from "react"
import type {JSX} from "react"
import { FaC, FaCircleExclamation } from "react-icons/fa6";
// Components
import LocationsSection from "./LocationsSection"
// Images
import patternTwoCircles from "../images/shared/desktop/bg-pattern-two-circles.svg"
import patternHeroHome from "../images/home/desktop/bg-pattern-hero-home.svg"

type FormErrors = {
    name?: string,
    email?: string,
    message?: string
}

export default function Contact(): JSX.Element {
    const [errors, setErrors] = useState<FormErrors>({})

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        // Prevents page reload and form reset
        e.preventDefault()
        console.log("Form submitted")
        
        // Error object for storing errors and their corresponding message
        let newErrors: FormErrors = {}
        console.log(newErrors)
    
        const formElement = e.currentTarget
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name")?.toString().trim() as string
        const email = formData.get("email")?.toString().trim() as string
        const message = formData.get("message")?.toString().trim() as string
        
        // Check each input. If it's incorrect, update the error object to include a key matching the input with the error message as the value
        if (!name) { newErrors.name = "Can't be empty" }

        if (!email) { 
            newErrors.email = "Can't be empty" 
        }
        else if (!/\S+@\S+\.\S+/.test(email) ) {
            newErrors.email = "Please use a valid email address"
        }

        if (!message) { newErrors.message = "Can't be empty" }
    
        // If there are errors on form submit, set the state to the errors object, causing a page refresh and the error messages below to render
        setErrors(newErrors)
        console.log(newErrors)
        
        // If there are no errors on form submit, reset the form and "send" the form data to the server
        if (Object.keys(newErrors).length === 0) {
            console.log("Message has been submitted.")
            formElement.reset()
        }
    }

    return (
        <main className="flex flex-col gap-y-30 2xl:gap-y-40">
            <section className="relative flex flex-col items-center 2xl:flex-row 2xl:justify-between gap-y-12 bg-peach overflow-hidden md:mx-10 2xl:mx-41 px-6 py-18 md:px-14.5 md:py-17.75 2xl:px-23.75 2xl:py-13.55 md:rounded-2xl">
                <div className="z-1 flex flex-col gap-y-6 text-white text-center md:text-start 2xl:w-111.25">
                    <h1 className="text-[2rem] font-medium leading-9 md:text-[3rem] md:leading-12">Contact Us</h1>
                    <p className="text-[0.9375rem] leading-6.25 md:text-[1rem] md:leading-6.5">Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
                </div>

                <form className="z-1 flex flex-col gap-y-10 w-full text-white 2xl:w-95" onSubmit={handleSubmit} noValidate>
                    <div className="flex flex-col gap-y-6.25">
                        <div className="relative">
                            <input
                                className="w-full pl-3.75 pb-2.75 border-b border-white placeholder-white/50 text-[0.9375rem] font-medium leading-6.5 focus:outline-none focus:placeholder-white focus:shadow-[0_2px_0_0_white]"
                                name="name"
                                type="text"
                                placeholder="Name"
                                required
                            />
                            {errors.name && 
                                <div className="absolute top-0 right-0 flex flex-row items-center gap-x-2.25">
                                    <span>{errors.name}</span>
                                    <FaCircleExclamation/>
                                </div>
                            }
                        </div>

                        <div className="relative">
                            <input
                                className="w-full pl-3.75 pb-2.75 border-b border-white placeholder-white/50 text-[0.9375rem] font-medium leading-6.5 focus:outline-none focus:placeholder-white focus:shadow-[0_2px_0_0_white]" 
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                required
                            />
                            {errors.email && 
                                <div className="absolute top-0 right-0 flex flex-row items-center gap-x-2.25">
                                    <span>{errors.email}</span>
                                    <FaCircleExclamation/>
                                </div>
                            }
                        </div>

                        <div>
                            <input
                                className="w-full pl-3.75 pb-2.75 border-b border-white placeholder-white/50 text-[0.9375rem] font-medium leading-6.5 focus:outline-none focus:placeholder-white focus:shadow-[0_2px_0_0_white]" 
                                name="phone"
                                type="number"
                                placeholder="Phone"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                name="message"
                                className="w-full pl-3.75 pb-19 border-b border-white resize-none placeholder-white/50 text-[0.9375rem] font-medium leading-6.5 focus:outline-none focus:placeholder-white focus:shadow-[0_2px_0_0_white]"
                                placeholder="Your Message"
                                required
                            />
                            {errors.message && 
                                <div className="absolute top-0 right-0 flex flex-row items-center gap-x-2.25">
                                    <span>{errors.message}</span>
                                    <FaCircleExclamation/>
                                </div>
                            }                                
                        </div>         
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
