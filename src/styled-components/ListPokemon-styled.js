import styled from "styled-components";

const List = styled.div`
  width: 100%;
  margin: 0 auto;

  .link-home {
    color: #fabe43;
    font-weight: 800;
    font-size: 20pt;
    text-decoration: none;
    margin-left: 20px;
  }

  .container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    @media screen and (min-width: 0) and (max-width: 700px) {
      grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    }
    img {
      max-width: 100vw;
    }

    > div {
      margin: 0 auto;
    }
    > div:nth-child(2) {
      font-size: 20pt;
      color: #ffff;
      padding-right: 87px;
      @media screen and (min-width: 0px) and (max-width: 1366px) {
        padding: 20px;
        margin: 0 auto;
      }
    }

    p {
      word-break: break-word;
    }

    h1 {
      color: #ffff;
      text-shadow: 2px 2px #ff0000;
      margin: 50px 0 0 0;
    }

    a {
      text-decoration: none;
      font-weight: 800;
      button {
        cursor: pointer;
        font-weight: bold;
        position: relative;
        font-size: 45pt;
        display: block;
        height: 100px;
        width: 250px;
        color: red;
        border-radius: 50px;
        margin: 50px auto;
        border: none;
        padding-top: 10px;
      }
    }
  }
  img {
    margin-top: 20px;
    width: 200px;
  }
  .logo_home {
    width: 500px;
  }
`;
export default List;
