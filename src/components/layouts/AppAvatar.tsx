import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";

const Avatar = styled.div`
  img {
    position: relative;
    z-index: 2;
    width: 100%;
    background-color: red;
  }

  @media (min-width: 1025px) {
    position: relative;
    width: 180px;
    margin: 0 auto 30px;
    z-index: 1;

    &:before {
      border-radius: 50%;
      position: absolute;
      opacity: 0.3;
      top: 7%;
      left: 7%;
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

    img {
      border-radius: 50%;
    }
  }
  @media (max-width: 1024px) {
    -ms-flex: 0 0 68px;
    flex: 0 0 68px;
    max-width: 68px;
    img {
      border-radius: 15px;
    }
  }
`;

const AppAvatar = () => {
  const { avatar, name } = useAppSelector(({ profile }) => {
    return {
      avatar: profile.data.avatar,
      name: profile.data.name
    };
  });

  const [ imgSize, setImageSize ] = useState(() => {
    if (window.innerWidth >= 1025) {
      return 180;
    } else {
      return 68;
    }
  });

  useEffect(() => {
    const resizeHandler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setImageSize(68);
      } else {
        setImageSize(180);
      }
    };
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change", resizeHandler);

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", resizeHandler);
    };
  }, []);

  return (
    <Avatar>
      <img width={ imgSize } height={ imgSize } src={ avatar } alt={ name } />
    </Avatar>
  );
};
export default AppAvatar;
