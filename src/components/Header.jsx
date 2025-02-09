import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { Outlet } from "react-router-dom";

function Header() {
    const toggleTheme = () => {
        document.body.classList.toggle("dark");
        
        const header = document.querySelector(".heading")
        header.classList.toggle("dark-card")

        const cards = [...document.getElementsByClassName('card')]
        cards.map(card => card.classList.toggle("dark-card"))

        const inputs = [...document.getElementsByClassName("filter")]
        inputs.map(input => input.classList.toggle("dark-card"))
    }

    return (
        <>
        <div className="heading">
            <div className="header container row">
                <h1>Where in the world?</h1>
                <div className="row" onClick={toggleTheme}>
                    <FaRegMoon
                        className="dark-icon"
                    />
                    <p>Dark Mode</p>            
                </div>
            </div>
        </div>
        <Outlet />
        </>
    )
}

export default Header;