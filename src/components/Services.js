import React from "react";
import Title from "./Title";
import { services } from "../images/data";
import ServicesLinks from "./ServicesLinks";
const Services = () => {
  return (
    <>
      {" "}
      <section className="section services" id="services">
        {/* title  */}
        <Title title="Our" subTitle="Services" />

        {/* end of title  */}
        <div className="section-center services-center">
          {/* single service */}
          {services.map((service) => {
            return <ServicesLinks key={service.id} {...service} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
