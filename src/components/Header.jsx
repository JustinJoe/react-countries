import { Outlet } from "react-router-dom";

function Header() {
    return (
        <>
        <div>
            <h1>Where in the world?</h1>
            <p>Dark Mode</p>
        </div>
        <Outlet />
        </>
    )
}

export default Header;