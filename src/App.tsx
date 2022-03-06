import React, { useEffect } from "react";
import styled from "styled-components";
import { BREAKPOINTS_UP } from "./styles";
import AppBackground from "./components/layouts/AppBackground";
import AppContent from "./components/layouts/AppContent";
import { fetchProfile } from "./store/profile/thunks";
import { useAppDispatch } from "./store/hooks";

import "./assets/fontawesome.scss";

export const AppWrapper = styled.div`
  @media (min-width: ${ BREAKPOINTS_UP.lg }) {
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile("profile"));
  }, []);

  return (
    <AppWrapper className="app app--wrapper">
      <AppBackground />
      <AppContent />
    </AppWrapper>
  );
};

export default App;
