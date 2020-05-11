import styled from "styled-components";

const Loader = styled.div`
  animation: run 0.8s linear infinite;
  position: fixed;
  top: calc(97vh - 25px);
  transform: scale(0.1);

  .pokeBall {
    position: fixed;
    animation: rotating 0.3s linear infinite;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-blend-mode: screen;
    background-image: radial-gradient(
        circle at 25% 25%,
        #fcffd5 1%,
        #ffe2ba 2%,
        #ffc595 4%,
        #fdb278 8%,
        #fd893e 12%,
        transparent 40%
      ),
      radial-gradient(
        150% 150% at 40% -20%,
        #fe0000 58%,
        #f85b30 58%,
        #000 58.5%,
        #000 62%,
        #999 62%,
        #999 62.5%,
        transparent 62.5%
      ),
      radial-gradient(130% 130% at 42% -7%, transparent 61%, #ddd 62%, #fff 62%);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4),
      -30px -30px 70px 10px rgba(0, 0, 0, 0.45) inset;
    -webkit-perspective: 400px;
    perspective: 400px;
  }
  .pokeBall::before {
    display: block;
    position: absolute;
    top: 55%;
    left: 54%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #fff;
    content: "";
    -webkit-transform: rotateX(-20deg) rotateY(20deg);
    transform: rotateX(-20deg) rotateY(20deg);
    box-shadow: -4px -4px 0 0 rgba(212, 212, 212, 0.6),
      4px 4px 10px rgba(0, 0, 0, 0.6), -4px -4px 0 20px #000,
      3px 3px 10px 20px rgba(0, 0, 0, 0.6);
  }
  .pokeBall::after {
    display: block;
    position: absolute;
    top: 60%;
    left: 59%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #fff;
    content: "";
    -webkit-transform: rotateX(-20deg) rotateY(20deg);
    transform: rotateX(-20deg) rotateY(20deg);
    box-shadow: -4px -4px 0 0 rgba(212, 212, 212, 0.6),
      4px 4px 10px rgba(0, 0, 0, 0.6);
    -webkit-transition: all 0.05s linear 0s;
    transition: all 0.05s linear 0s;
  }
  .pokeBall:active::after {
    top: 59.69%;
    left: 58.69%;
    box-shadow: -2px -2px 0 0 rgba(212, 212, 212, 0.6),
      2px 2px 10px rgba(0, 0, 0, 0.6);
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes run {
    0% {
      left: 25vw;
    }
    100% {
      left: 75vw;
    }
  }
`;
export default Loader;
