import { Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div className="px-4 py-1.5">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand to="/">
          <h1 className="text-4xl font-normal text-gray-900 md:text-5xl lg:text-6xl">
            S.
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="#about-me">About Me</Navbar.Link>
          <Navbar.Link href="#projects">Projects</Navbar.Link>
          {/* <Navbar.Link href="/navbars">Pricing</Navbar.Link> */}
          <Navbar.Link href="#contact">Hire/Contact Me</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
