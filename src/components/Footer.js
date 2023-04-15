import React from "react";
import { socialLinks } from "../images/data";
import PageLinks from "./PageLinks";
import SocialPageLinks from "./SocialPageLinks";
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLinks parentLink="footer-links" childLink="footer-link" />

        {/* footer icons */}
        <ul className="footer-icons">
          {/* single icon */}
          {socialLinks.map((social) => {
            return (
              <SocialPageLinks
                {...social}
                key={social.id}
                CSSclass="footer-icon"
              />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span>. all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
