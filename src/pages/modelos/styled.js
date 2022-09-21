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



  .title {
    font-family: "Eurostile";
    color: #e3f4ff;
    font-size: 40px;
  }
  .p{
    font-family: "Eurostile";
    color: #e3f4ff;
    font-size: 20px;

  }
  .center {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;
  }
`;
