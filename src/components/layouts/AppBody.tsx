import styled from "styled-components";

const Body = styled.main`
  background-color: white;
  border-radius: 15px;
  flex-basis: 0;
  flex-grow: 1;
`;

const AppBody = () => {
  return (
    <Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero
      minus ratione voluptates quae blanditiis necessitatibus ex illo veniam,
      quam rerum vel esse, ipsum enim soluta voluptatem officia eligendi rem?
    </Body>
  );
};
export default AppBody;
