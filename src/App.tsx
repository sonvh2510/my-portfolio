import React from "react";
import styled from "styled-components";
import {BREAKPOINTS_UP} from "./styles";

import AppBackground from "./components/layouts/AppBackground";
import AppContent from "./components/layouts/AppContent";

export const AppWrapper = styled.div`
  @media (min-width: ${BREAKPOINTS_UP.lg}) {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0 100px;
    overflow: hidden;
    min-height: 100%;
  }
`;

const App = () => {
  return (
    <AppWrapper className="app app--wrapper">
      <AppBackground/>
      <AppContent/>
    </AppWrapper>
  );
};

export default App;
