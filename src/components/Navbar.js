import React from "react";
import logo from "../images/images/logo.svg";
import { socialLinks } from "../images/data";
import SocialPageLinks from "./SocialPageLinks";

// import PageLinks from "./PageLinks";
import PageLinks from "./PageLinks";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          {/* nav header */}
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* end of nav header */}
          {/* nav links */}
          <PageLinks parentLink="nav-links" childLink="nav-link" />
          <ul className="nav-icons">
            {socialLinks.map((social) => {
              return (
                <SocialPageLinks
                  {...social}
                  key={social.id}
                  CSSclass="nav-icon"
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
