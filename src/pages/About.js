import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import AboutList from "../components/AboutList";

const About = () => {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner
          title="About us"
          subtitle="The best place to escape, relax and unwind"
        >
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <AboutList />
    </>
  );
};

export default About;
