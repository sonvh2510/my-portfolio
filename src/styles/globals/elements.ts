import styled from "styled-components";

export const PageTitle = styled.h2`
  position: relative;
  font-size: 32px;
  z-index: 1;

  &:after {
    position: absolute;
    opacity: 0.45;
    top: 10px;
    right: 0;
    content: "";
    height: 30px;
    width: 50px;
    background-image: -webkit-repeating-radial-gradient(
      center center,
      #04b4e0,
      #04b4e0 1px,
      transparent 0px,
      transparent 100%
    );
    background-image: -moz-repeating-radial-gradient(
      center center,
      #04b4e0,
      #04b4e0 1px,
      transparent 0px,
      transparent 100%
    );
    -webkit-background-size: 6px 6px;
    -moz-background-size: 6px 6px;
    background-size: 6px 6px;
    z-index: 0;
  }
  span {
    color: #04b4e0;
  }
`;

export const BlockTitle = styled.h3`
  position: relative;
  font-size: 21px;
  z-index: 1;

  &:after {
    position: absolute;
    opacity: 0.45;
    top: 10px;
    right: 0;
    content: "";
    height: 30px;
    width: 50px;
    background-image: -webkit-repeating-radial-gradient(
      center center,
      #04b4e0,
      #04b4e0 1px,
      transparent 0px,
      transparent 100%
    );
    background-image: -moz-repeating-radial-gradient(
      center center,
      #04b4e0,
      #04b4e0 1px,
      transparent 0px,
      transparent 100%
    );
    -webkit-background-size: 6px 6px;
    -moz-background-size: 6px 6px;
    background-size: 6px 6px;
    z-index: 0;
  }
  span {
    color: #04b4e0;
  }
`;

export default {
  PageTitle,
  BlockTitle,
};
