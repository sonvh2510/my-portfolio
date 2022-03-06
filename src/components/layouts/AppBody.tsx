import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";
import routes from "../../routes";

const Body = styled.main`
  background-color: white;
  border-radius: 15px;
  flex-basis: 0;
  flex-grow: 1;
  padding: 60px;
  overflow-y: auto;
  @media (max-width: 1024px) {
    position: fixed;
    max-width: 660px;
    width: calc(100% - 30px);
    min-height: 320px;
    max-height: calc(100% - 178px);
    left: 50%;
    top: 50%;
    padding: 30px;
    transform: translate(-50%, -50%);
  }
`;
const AppBody = () => {
  return (
    <Body>
      <Routes>
        { routes.map((r) => {
          return (
            <Route
              key={ r.path }
              path={ r.path }
              element={
                <Suspense fallback={ <Loading /> }>
                  <r.component />
                </Suspense>
              }
            />
          );
        }) }
      </Routes>
    </Body>
  );
};
export default AppBody;
