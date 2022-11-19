import { Navbar } from "flowbite-react";
import React from "react";
import assist from "./assist.png";
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <div>
        <Navbar
        fluid={true}
                rounded={true}
                className='shadow-md'
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={assist}
            className="mr-3 h-20 sm:h-20"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-3xl font-semibold font-rs">
            <span className="text-primary" >Great</span><span>Assists</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
          
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default Navigation;
