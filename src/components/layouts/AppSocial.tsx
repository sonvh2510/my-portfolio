import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import { SocialEnum } from "../../interfaces/profile.interface";

import "../../assets/scss/fontawesome.scss";
import "../../assets/scss/brands.scss";
import "../../assets/scss/solid.scss";

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding-inline-start: 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const SocialItem = styled.li`
  margin: 0 5px;

  a {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    text-decoration: none;
    border-radius: 50%;

    i {
      line-height: 1;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
      color: white;
    }
  }
`;

const AppSocial = () => {
  const { socials } = useAppSelector(({ profile }) => {
    return {
      socials: profile.data.socials,
    };
  });

  return (
    <Social>
      {
        socials && socials.length > 0 && socials.map(s => {
          return (
            <SocialItem key={ s.url }>
              <a href={ s.url } target="_blank" rel="noreferrer">
                <i className={ SocialEnum[s.type] }></i>
              </a>
            </SocialItem>
          );
        })
      }
    </Social>
  );
};
export default AppSocial;
