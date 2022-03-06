import React, { NavLink } from "react-router-dom";
import styled from "styled-components";

import { BREAKPOINTS_DOWN, BREAKPOINTS_UP } from "../../styles";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  z-index: 999;
  list-style: none;
  box-shadow: 0 0 30px -5px rgb(0 0 0 / 15%);

  .nav-item {
    display: flex;
    justify-content: center;

    a {
      color: black;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      width: 60px;
      padding: 10px;

      &.active {
        background-color: rgba(0, 128, 0, .5);
        border-radius: 50%;

        i {
          color: white;
        }
      }
    }

    i {
      font-size: 28px;
    }

    &:hover {
      a {
        transition: all 0.3s ease;
        color: green;
      }
    }
  }

  @media (min-width: ${ BREAKPOINTS_UP.lg }) {
    border-radius: 35px;
    position: absolute;
    padding: 15px 0;
    width: 70px;
    right: -85px;
    top: 0;
  }
  @media (max-width: ${ BREAKPOINTS_DOWN.lg }) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    border-radius: 15px 15px 0 0;
    justify-content: center;
    z-index: 100;
    .nav-item {
      margin: 0 auto;
    }
  }
`;

const AppNav = () => {
  return (
    <Nav>
      <div className="nav-item">
        <NavLink to="" className={ ({ isActive }) => isActive ? "active" : "" }>
          <i className="fa-light fa-house" />
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="about-me" className={ ({ isActive }) => isActive ? "active" : "" }>
          <i className="fa-light fa-user" />
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="my-resume" className={ ({ isActive }) => isActive ? "active" : "" }>
          <i className="fa-light fa-graduation-cap" />
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="my-portfolio" className={ ({ isActive }) => isActive ? "active" : "" }>
          <i className="fa-light fa-briefcase" />
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="my-blog" className={ ({ isActive }) => isActive ? "active" : "" }>
          <i className="fa-light fa-newspaper" />
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="contact-me" className={ ({ isActive }) => isActive ? "active" : "" }>
          <i className="fa-light fa-paper-plane" />
        </NavLink>
      </div>
    </Nav>
  );
};
export default AppNav;
