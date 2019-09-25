import React, { Component } from "react";
import defaultBcg from "../images/defaultBcg.jpeg";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import StyledHeroFilter from "../components/StyledHeroFilter";
import {
  FaDollarSign,
  FaRuler,
  FaUserFriends,
  FaPaw,
  FaUtensils,
  FaTimes
} from "react-icons/fa";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    //show room error page if room object cannot be found by slug
    if (!room) {
      return (
        <Hero>
          <Banner title="404" subtitle="no such room could be found...">
            <Link to="/rooms/" className="btn-primary">
              return rooms
            </Link>
          </Banner>
        </Hero>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    return (
      <>
        {/* single room hero */}
        <header className="roomsHero">
          <StyledHeroFilter img={images[0] || this.state.defaultBcg} />
          <Banner title={`${name} room`}>
            <Link to="/rooms/" className="btn-primary">
              return to rooms
            </Link>
          </Banner>
        </header>

        <section className="single-room">
          {/* single room iamges */}
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>

          <div className="single-room-separator" />

          {/* single room description and info */}
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>
                <FaDollarSign className="info-icon" />
                price : ${price}
              </h6>
              <h6>
                <FaRuler className="info-icon" />
                size : {size} sqft
              </h6>
              <h6>
                <FaUserFriends className="info-icon" />
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              {(() => {
                if (pets) {
                  return (
                    <h6>
                      <FaPaw className="info-icon" />
                      pets allowed
                    </h6>
                  );
                } else {
                  return (
                    <h6>
                      <FaTimes className="info-icon false-icon" />
                      no pets allowed
                    </h6>
                  );
                }
              })()}
              {(() => {
                if (breakfast) {
                  return (
                    <h6>
                      <FaUtensils className="info-icon" />
                      free breakfast
                    </h6>
                  );
                } else {
                  return (
                    <h6>
                      <FaTimes className="info-icon false-icon" />
                      no free breakfast
                    </h6>
                  );
                }
              })()}
            </article>
          </div>

          <div className="single-room-separator" />
        </section>
        {/* single room extras */}
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
