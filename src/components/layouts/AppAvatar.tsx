import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";

const Avatar = styled.div`
  img {
    position: relative;
    z-index: 2;
    width: 100%;
    border-radius: 50%;
  }

  @media (min-width: 1025px) {
    position: relative;
    width: 180px;
    margin: 0 auto 30px;
    z-index: 1;
    border-radius: 50%;

    &:before {
      position: absolute;
      opacity: 0.3;
      top: 7%;
      left: 7%;
      border-radius: 300px;
      content: "";
      height: calc(100% + 0px);
      width: calc(100% + 0px);
      background-image: -webkit-repeating-radial-gradient(center center,
      #fff,
      #fff 1px,
      transparent 0px,
      transparent 100%);
      background-size: 6px 6px;
      z-index: 1;
    }
  }
  @media (max-width: 1024px) {
    -ms-flex: 0 0 68px;
    flex: 0 0 68px;
    max-width: 68px;
  }
`;

const AppAvatar = () => {

  const { avatar, name } = useAppSelector(({ profile }) => {
    return {
      avatar: profile.data.avatar,
      name: profile.data.name
    };
  });

  return (
    <Avatar>
      <img width="180" height="180" src={ avatar } alt={ name } />
    </Avatar>
  );
};
export default AppAvatar;
