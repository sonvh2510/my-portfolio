import styled from "styled-components";
import AppAvatar from "./AppAvatar";
import AppSocial from "./AppSocial";
import AppTitle from "./AppTitle";

const Header = styled.header`
  width: 100%;
  max-width: 380px;
  height: 100%;
  max-height: 80vh;
  min-height: inherit;
  text-align: center;
  padding: 70px 30px 45px;
  overflow: auto;
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
