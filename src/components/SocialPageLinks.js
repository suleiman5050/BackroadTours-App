import React from "react";

const SocialPageLinks = ({ href, icon, CSSclass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={CSSclass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialPageLinks;
