import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(5, 1fr);
  height: auto;
  margin: 20px;
  > div:nth-child(2) {
    border-left: 3px solid #50e3c2;
  }
  @media screen and (min-width: 0px) and (max-width: 1366px) {
    grid-template-columns: repeat(auto-fit, minmax(265px, auto));
  }
`;
export default Grid;
