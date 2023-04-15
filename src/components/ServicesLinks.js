import React from "react";

const ServicesLinks = ({ heading, text, icon }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{heading}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default ServicesLinks;
