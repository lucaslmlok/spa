import React, { Component } from "react";
import { FaAlignRight, FaSpa } from "react-icons/fa";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class Navbar extends Component {
  state = {
    isOpen: false,
    prevScrollpos: window.pageYOffset,
    visible: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
      isOpen: false
    });
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}
      >
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <FaSpa className="nav-logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/" onClick={this.handleToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={this.handleToggle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/rooms" onClick={this.handleToggle}>
                Rooms
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
