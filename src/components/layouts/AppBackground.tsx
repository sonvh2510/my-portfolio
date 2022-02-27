import styled from "styled-components";

const Background = styled.div`
  background-image: url(/images/main_bg.png);
  background-position: center;
  background-size: cover;
  background-color: gray;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const AppBackground = () => {
  return <Background className="app__background"></Background>;
};
export default AppBackground;
