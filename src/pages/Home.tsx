import { memo } from "react";
import styled from "styled-components";

const HomeSectionContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
  h2 {
    font-size: 60px;
    line-height: 74px;
    margin: 0;
    text-align: center;
  }
  p {
    color: #888;
    font-size: 21px;
    font-weight: 300;
    margin: 5px 0;
    text-align: center;
  }
`;

const Home = memo(() => {
  return (
    <HomeSectionContent>
      <h2>Vũ Hoàng Sơn</h2>
      <p>Website/App Developer</p>
    </HomeSectionContent>
  );
});
export default Home;
