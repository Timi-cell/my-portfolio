import { Footer } from "flowbite-react";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer
      container={true}
      className="flex flex-col items-center justify-between gap-8 md:flex-row"
    >
      <h1 className="text-4xl font-normal text-gray-900 md:text-5xl lg:text-6xl">
        S.
      </h1>
      <Footer.LinkGroup className="gap-8 md:gap-1">
        <Footer.Link href="https://wa.link/a1lyfz">
          <IoLogoWhatsapp size={30} color="green" />
        </Footer.Link>
        <Footer.Link href="https://www.linkedin.com/in/aluko-oluwatimilehin-a167b8218">
          <BsLinkedin size={30} color="rgb(0, 0, 172)" />
        </Footer.Link>
        <Footer.Link href="https://github.com/Timi-cell">
          <BsGithub size={30} color="black" />
        </Footer.Link>
        <Footer.Link href="https://twitter.com/_teeblaq10">
          <BsTwitter size={30} color="blue" />
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default FooterComp;
