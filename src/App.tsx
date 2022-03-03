import React from "react";
import styled from "styled-components";
import { BREAKPOINTS_DOWN, BREAKPOINTS_UP } from "./styles";

import AppBackground from "./components/layouts/AppBackground";
import AppContent from "./components/layouts/AppContent";

export const AppWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  min-height: 100%;
  padding: 0 100px;
  overflow: hidden;

  @media (min-width: ${BREAKPOINTS_UP.xl}) {
    padding-left: 30px;
  }
  @media (max-width: ${BREAKPOINTS_DOWN.md}) {
    padding: 0 20px;
  }
`;

const App = () => {
  return (
    <AppWrapper className="app app--wrapper">
      <AppBackground></AppBackground>
      <AppContent></AppContent>
    </AppWrapper>
  );
};

export default App;
