import React from "react";
import styled from "styled-components";
import { BREAKPOINTS_DOWN, BREAKPOINTS_UP } from "../../styles";
import AppAvatar from "./AppAvatar";
import AppSocial from "./AppSocial";
import AppTitle from "./AppTitle";

const Header = styled.header`
  @media (min-width: ${ BREAKPOINTS_UP.lg }) {
    width: 100%;
    max-width: 380px;
    height: 100%;
    max-height: 80vh;
    min-height: inherit;
    text-align: center;
    padding: 70px 30px 45px;
    overflow: auto;
  }
  @media (max-width: ${ BREAKPOINTS_DOWN.lg }) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: green;
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    z-index: 100;
  }
`;

const AppHeader = () => {
  return (
    <Header>
      <AppAvatar></AppAvatar>
      <AppTitle></AppTitle>
      <AppSocial></AppSocial>
    </Header>
  );
};

export default AppHeader;
