import styled from "styled-components";

import "../../assets/scss/fontawesome.scss";
import "../../assets/scss/brands.scss";
import "../../assets/scss/solid.scss";

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding-inline-start: 0;
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
    }
  }
`;

const AppSocial = () => {
  return (
    <Social>
      <SocialItem>
        <a href="https://www.linkedin.com/in/sonvh2510/">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://github.com/sonvh2510">
          <i className="fa-brands fa-github-alt"></i>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://www.facebook.com/sonvh2510/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </SocialItem>
      <SocialItem>
        <a href="mailto:sonvh2510@gmail.com">
          <i className="fa-solid fa-paper-plane"></i>
        </a>
      </SocialItem>
    </Social>
  );
};
export default AppSocial;
