import React from "react";
import styled from "styled-components";

const AboutItem = ({ about, index }) => {
  const { title, info, img } = about;
  return (
    <article className="about-item" data-aos="fade-up" data-aos-duration="500">
      <div className="about-filter" />
      <StyledImg img={img} />
      <StyledBanner index={index} className="about-banner">
        <h2
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-duration="1200"
        >
          {title}
        </h2>
        <p
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          {info}
        </p>
      </StyledBanner>
    </article>
  );
};

export default AboutItem;

const StyledImg = styled.div`
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 30%),
    url(${props => props.img}) center/cover no-repeat;
  width: 100%;
  height: 100%;
`;

const StyledBanner = styled.div`
  right: ${props => (props.index % 2 === 0 ? "-20%" : "20%")};
  @media screen and (max-width: 900px) {
    right: 0;
    width: 80vw;
  }
  @media screen and (max-width: 700px) {
    right: 0;
    width: 100vw;
  }
`;
