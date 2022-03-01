import styled from "styled-components";
import AppBody from "./AppBody";
import AppHeader from "./AppHeader";
import AppNav from "./AppNav";

export const Content = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  min-height: 80vh;
  margin: 10vh auto;
  padding: 0;
  background-color: green;
  box-shadow: 0 0 100px -5px rgb(0 0 0 / 25%);
  border-radius: 32px;
  backface-visibility: hidden;
  display: flex;
`;

const AppContent = () => {
  return (
    <Content>
      <AppHeader></AppHeader>
      <AppNav></AppNav>
      <AppBody></AppBody>
    </Content>
  );
};

export default AppContent;
