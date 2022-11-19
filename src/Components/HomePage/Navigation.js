import { Button, Navbar } from "flowbite-react";
import React from "react";
import assist from "./assist.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="shadow-md">
            <Navbar fluid={true} rounded={true} className="container mx-auto ">
                <Navbar.Brand href="https://flowbite.com/">
                    <img src={assist} className="mr-3 h-20 sm:h-20" alt="Flowbite Logo" />
                    <span className="self-center whitespace-nowrap text-3xl font-semibold font-rs">
                        <span className="text-primary">Great</span>
                        <span>Assists</span>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink
                        to="/"
                        className={
                            "border-b-2 border-white hover:border-b-primary focus:border-b-2 focus:border-b-primary p-3 text-xl font-bold"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={
                            "border-b-2 border-white hover:border-b-primary focus:border-b-2 focus:border-b-primary p-3 text-xl font-bold"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={
                            "border-b-2 border-white hover:border-b-primary focus:border-b-2 focus:border-b-primary p-3 text-xl font-bold"
                        }
                    >
                        Contact
                    </NavLink>
                    <button
                        to="/sing-in"
                        className={
                            "rounded-lg text-white bg-primary ml-3 p-3 text-xl font-bold"
                        }
                    >
                        Sign In
                    </button>

                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
