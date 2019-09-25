import React, { Component } from "react";
import AboutItem from "./AboutItem";
import AboutImg1 from "../images/about1.jpeg";
import AboutImg2 from "../images/about2.jpeg";
import AboutImg3 from "../images/about3.jpeg";
import AboutImg4 from "../images/about4.jpeg";
import Title from "../components/Title";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default class AboutList extends Component {
  state = {
    about: [
      {
        title: "Full service spa",
        info: lorem,
        img: AboutImg1
      },

      {
        title: "Free Cocktail",
        info: lorem,
        img: AboutImg2
      },
      {
        title: "Fitness center",
        info: lorem,
        img: AboutImg3
      },
      {
        title: "Free Shuttle",
        info: lorem,
        img: AboutImg4
      }
    ]
  };

  render() {
    return (
      <section className="about">
        <Title title="Services" />
        {this.state.about.map((item, index) => {
          return <AboutItem about={item} key={index} index={index} />;
        })}
      </section>
    );
  }
}
