import { Footer } from 'flowbite-react';
import React from 'react'

const FooterComp = () => {
  return (
     <div className="px-4 py-1.5">
    <Footer container={true}>
      <h1 className="text-4xl font-normal text-gray-900 md:text-5xl lg:text-6xl">
        S.
      </h1>
      {/* <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup> */}
    </Footer>
    </div>
  );
}

export default FooterComp;