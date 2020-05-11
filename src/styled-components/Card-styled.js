import styled from "styled-components";

const Card = styled.button`
  text-align: center;
  position: relative;
  min-width: 150px;
  margin: 0 auto;
  box-shadow: 10px 10px 5px 0px rgb(10, 8, 8);
  display: inline-block;
  width: 300px;
  padding: 1em;
  border-radius: 5px;
  border: none;
  background: linear-gradient(0deg, #c71800 10%, #fcc245 100%);

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
      height: 50%;
      background: #f4ecec7a;
      h1 {
        margin: 0;
        padding-top: 10px;
      }
      h2 {
        width: 25%;
        background: #c71800;
        font-size: 13px;
        border-top: 3px solid #ffff;
        border-left: 2px solid #ffff;
        border-radius: 5px;
        color: #ffff;
        padding-top: 5px;
        display: inline-block;
        position: relative;
      }
      > div {
        span {
          margin: 0 5px;
          cursor: pointer;
          font-size: 11pt;
          color: #c71800;
          font-weight: bold;
        }
        span:hover {
          color: #ffff;
        }
      }
      section {
        color: #c71800;
        .style-span {
          font-weight: bold;
        }
      }
    }
  }

  :hover {
    border: solid 3px #45fcc1;
    box-shadow: 13px 24px 50px 20px rgba(69, 252, 193, 0.57);
    img {
      animation: mover 0.3s infinite alternate;
      overflow: initial;
      @-webkit-keyframes mover {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-20px);
        }
      }
      @keyframes mover {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-20px);
        }
      }
    }
  }
`;
export default Card;
