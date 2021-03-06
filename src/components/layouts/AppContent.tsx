import React from "react";
import styled from "styled-components";
import { BREAKPOINTS_UP } from "../../styles";
import AppBody from "./AppBody";
import AppHeader from "./AppHeader";
import AppNav from "./AppNav";

export const Content = styled.section`
  flex-direction: column;
  @media (min-width: ${ BREAKPOINTS_UP.lg }) {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    max-width: 1280px;
    height: 80vh;
    margin: 10vh auto;
    padding: 0;
    background-color: green;
    box-shadow: 0 0 100px -5px rgb(0 0 0 / 25%);
    border-radius: 32px;
    backface-visibility: hidden;
  }
`;

const AppContent = () => {
  return (
    <Content>
      <AppHeader />
      <AppNav />
      <AppBody />
    </Content>
  );
};

export default AppContent;
