import { Link } from "react-router-dom";
import styled from "styled-components";

import "../../assets/scss/fontawesome.scss";
import "../../assets/scss/light.scss";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 15px 0;
  width: 70px;
  right: -85px;
  top: 0;
  background-color: #ffffff;
  border-radius: 35px;
  z-index: 999;
  list-style: none;
  box-shadow: 0 0 30px -5px rgb(0 0 0 / 15%);

  .nav-item {
    a {
      color: black;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      padding: 10px;
    }
    i {
      font-size: 28px;
    }

    &:hover {
      a {
        transition: all .3s ease;
        color: green;
      }
    }
  }
`;

const AppNav = () => {
  return (
    <Nav>
      <div className="nav-item">
        <Link to="/">
          <i className="fa-light fa-house"></i>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/about-me">
          <i className="fa-light fa-user"></i>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/resume">
          <i className="fa-light fa-graduation-cap"></i>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/portfolio">
          <i className="fa-light fa-briefcase"></i>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/blog">
          <i className="fa-light fa-newspaper"></i>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/contact-me">
          <i className="fa-light fa-paper-plane"></i>
        </Link>
      </div>
    </Nav>
  );
};
export default AppNav;
