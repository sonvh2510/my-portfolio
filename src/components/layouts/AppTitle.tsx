import styled from "styled-components";

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
`;

const AppTitle = () => {
  return (
    <Title>
      <h2>Vũ Hoàng Sơn</h2>
      <h4>Software Frontend Enginner</h4>
    </Title>
  );
};
export default AppTitle;
