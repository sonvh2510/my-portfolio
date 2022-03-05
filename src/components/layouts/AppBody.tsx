import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

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

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Resume = lazy(() => import("../../pages/Resume"));
const Portfolio = lazy(() => import("../../pages/Portfolio"));
const Blog = lazy(() => import("../../pages/Blog"));
const Contact = lazy(() => import("../../pages/Contact"));

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
          path="/blog"
          element={
            <Suspense fallback={<Loading />}>
              <Blog />
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
