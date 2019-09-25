import React, { Component } from "react";
import Title from "./Title";
import { FaSpa, FaCocktail, FaDumbbell, FaShuttleVan } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSpa />,
        title: "Full service spa",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis."
      },
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis."
      },
      {
        icon: <FaDumbbell />,
        title: "Fitness center",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="secvices" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article
                key={index}
                className="service"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
