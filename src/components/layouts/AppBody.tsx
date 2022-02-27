import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

const Body = styled.main`
  background-color: white;
  border-radius: 15px;
  flex-basis: 0;
  flex-grow: 1;
  padding: 60px;
`;

const About = lazy(() => import("../../pages/About"));
const Contact = lazy(() => import("../../pages/Contact"));
const Home = lazy(() => import("../../pages/Home"));
const Portfolio = lazy(() => import("../../pages/Portfolio"));
const Resume = lazy(() => import("../../pages/Resume"));

const AppBody = () => {
  return (
    <Body>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/about-me"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        ></Route>
        <Route
          path="/resume"
          element={
            <Suspense fallback={<Loading />}>
              <Resume />
            </Suspense>
          }
        ></Route>
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<Loading />}>
              <Portfolio />
            </Suspense>
          }
        ></Route>
        <Route
          path="/contact-me"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Body>
  );
};
export default AppBody;
