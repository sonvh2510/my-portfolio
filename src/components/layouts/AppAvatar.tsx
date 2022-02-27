import styled from "styled-components";

const Avatar = styled.div`
  position: relative;
  width: 180px;
  margin: 0 auto 30px;
  z-index: 1;
  border-radius: 50%;

  img {
    position: relative;
    z-index: 2;
    width: 100%;
    border-radius: 50%;
  }

  &:before {
    position: absolute;
    opacity: 0.3;
    top: 7%;
    left: 7%;
    border-radius: 300px;
    content: "";
    height: calc(100% + 0px);
    width: calc(100% + 0px);
    background-image: -webkit-repeating-radial-gradient(
      center center,
      #fff,
      #fff 1px,
      transparent 0px,
      transparent 100%
    );
    background-size: 6px 6px;
    z-index: 1;
  }
`;

const AppAvatar = () => {
  return (
    <Avatar>
      <img src="/images/avatar.jpeg"></img>
    </Avatar>
  );
};
export default AppAvatar;
