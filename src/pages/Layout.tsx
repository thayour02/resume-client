import Nav from "../components/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div className="bg-gray-50 min-h-screen">
                <Nav/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout