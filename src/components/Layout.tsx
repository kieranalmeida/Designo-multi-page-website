import type {JSX} from "react"
// Layout components
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