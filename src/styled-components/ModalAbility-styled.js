import styled from "styled-components";

const Modal = styled.div`
  text-align: center;
  position: relative;
  min-width: 150px;
  margin: 0 auto;
  box-shadow: 10px 10px 5px 0px rgb(10, 8, 8);
  display: inline-block;
  width: 600px;
  padding: 1em;
  border-radius: 5px;
  border: none;
  background: #6a5c5a;

  > div {
    text-align: center;
    border-radius: 3px 3px 0 0;
    height: 400px;
    margin: 5px;
    > div:nth-child(1) {
      background-color: rgba(50, 50, 50, 0.67);
      text-align: center;
      padding: 1em 1em 0;
      border-radius: 3px 3px 0 0;
      img {
        width: 163px;
      }
    }
    > div:nth-child(2) {
      width: 100%;
      height: 55%;
      background: #f4ecec7a;
      overflow-x: auto;
      h1 {
        margin: 0;
        padding-top: 10px;
      }
      > div {
        p {
          padding: 0 10px;
          word-break: break-word;
        }
      }
    }
  }
`;
export default Modal;
