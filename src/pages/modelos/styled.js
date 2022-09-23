import styled from "styled-components";
import image from "../../images/imagens finais/Landing2.png";

export const Container = styled.div`
  @font-face {
    font-family: "Eurostile";
    src: url("../../fonts/eurostile.otf") format("truetype");
  }
  padding: 100px 0 0 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  background: url(${image});
  background-size: cover;

  @media (max-width: 660px) {
    height: auto;
    .titleTop {
      margin-top: 80px;
    }

    .center {
      flex-direction: column-reverse;
    }
  }

  .title {
    font-family: "Eurostile";
    color: #e3f4ff;
    font-size: 40px;
  }
  .pButton {
    font-family: "Eurostile";
    color: #e3f4ff;
    font-size: 20px;
    cursor: pointer;
  }
  .center {
    display: flex;

    align-items: center;
    gap: 30px;
    justify-content: flex-start;
  }
`;
