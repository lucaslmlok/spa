import React from "react";

const Banner = ({ children, title, subtitle, style }) => {
  return (
    <div className="banner">
      <div
        className="inner-banner"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default Banner;
