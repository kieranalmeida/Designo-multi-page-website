import type {JSX} from "react"
// React Router
import {BrowserRouter, Routes, Route} from "react-router-dom"
// Routes
import Layout from "./components/Layout"
import Home from "./components/Home"
import WebDesign from "./components/WebDesign"
import AppDesign from "./components/AppDesign"
import GraphicDesign from "./components/GraphicDesign"
import About from "./components/About"
import Location from "./components/Location"
import Contact from "./components/Contact"

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/web-design" element={<WebDesign />}/>
                    <Route path="/app-design" element={<AppDesign />}/>
                    <Route path="/graphic-design" element={<GraphicDesign />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/location" element={<Location />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}