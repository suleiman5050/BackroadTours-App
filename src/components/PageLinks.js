import React from "react";
import { pageLinks } from "../images/data";
const PageLinks = ({ parentLink, childLink }) => {
  return (
    <ul className={parentLink}>
      {/* footer links */}
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={childLink}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
