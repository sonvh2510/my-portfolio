import styled from "styled-components";

export const PageTitle = styled.div`
  display: inline-block;
  position: relative;
  padding-right: 25px;
  padding-bottom: 15px;
  margin-bottom: 30px;

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

  h2 {
    position: relative;
    font-size: 32px;
    z-index: 1;
    span {
      color: green;
    }
  }
`;

export const BlockTitle = styled.div`
  display: inline-block;
  position: relative;
  padding-right: 12px;
  padding-bottom: 10px;
  margin-bottom: 15px;

  &:after {
    position: absolute;
    opacity: 0.45;
    top: 10px;
    right: 0;
    content: "";
    height: 18px;
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
    background-size: 6px 6px;
    z-index: 0;
  }

  h3 {
    position: relative;
    font-size: 21px;
    z-index: 1;
    span {
      color: green;
    }
  }
`;

export default {
  PageTitle,
  BlockTitle,
};
