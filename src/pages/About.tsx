import styled from "styled-components";
import { BlockTitle, PageTitle } from "../styles/globals/elements";

const InfoList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  li {
    b {
      color: green;
    }
  }
`;

const About = () => {
  return (
    <section>
      <PageTitle>
        <h2>
          About
          <span> Me</span>
        </h2>
      </PageTitle>
      <section className="section-content">
        <div className="row">
          <div className="col-sm-7">
            <p>
              Hello!
              <br />
              My name is Son and I have more than 4 years in work as a Frontend Developer.
            </p>
          </div>
          <div className="col-sm-5">
            <div className="info-list">
              <InfoList>
                <li>
                  <b className="title">Age </b>
                  <span className="value"> 28</span>
                </li>
                <li>
                  <b className="title">Residence </b>
                  <span className="value"> Việt Nam</span>
                </li>
                <li>
                  <b className="title">Address </b>
                  <span className="value">
                     Nguyễn Lương Bằng, P. Phú Mỹ, Q.7, TP. Hồ Chí Minh
                  </span>
                </li>
                <li>
                  <b className="title">Email </b>
                  <span className="value"> sonvh2510@gmail.com</span>
                </li>
                <li>
                  <b className="title">Phone </b>
                  <span className="value"> 0914 633 990</span>
                </li>
              </InfoList>
            </div>
          </div>
        </div>
        <div className="white-space-50"></div>
        <div className="row">
          <div className="col-12">
            <BlockTitle>
              <h3>
                What
                <span> I do</span>
              </h3>
            </BlockTitle>
          </div>
        </div>
      </section>
    </section>
  );
};
export default About;
