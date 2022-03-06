import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";

const Title = styled.div`
  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #fff;
    margin: 5px 0 7px;
    line-height: 1.2em;
  }

  h4 {
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    margin: 5px 0;
    line-height: 1.2em;
  }

  @media (max-width: 1024px) {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    padding-left: 30px;
    h2 {
      font-size: 28px;
    }

    h4 {
      font-size: 14px;
    }
  }
`;

const AppTitle = () => {
  const { name, title } = useAppSelector(({ profile }) => {
    return {
      name: profile.data.name,
      title: profile.data.title
    };
  });
  return (
    <Title>
      <h2>{ name }</h2>
      <h4>{ title }</h4>
    </Title>
  );
};
export default AppTitle;
