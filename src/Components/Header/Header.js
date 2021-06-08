import React from 'react';


function Header() {
    return (
        <header className="flex-row px-1">

            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About</a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>

            <div className="logo">
                <a href="/">
                    <img alt="" />
                </a>
            </div>

        </header>
    )
}

export default Header;
