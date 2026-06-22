import type {JSX} from "react"
// Import layout components
import Header from "./Header"
import {Outlet} from "react-router-dom"
import Footer from "./Footer"

export default function Layout(): JSX.Element {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}