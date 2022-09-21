import styled from "styled-components";

export const Container = styled.div`
  font-family: "Eurostile";
  src: url("../../fonts/eurostile.otf") format("truetype");
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  @media (max-width: 660px) {
    align-items: center;
    text-align: start;
    .pSaibaMais {
      text-align: start;
    }
  }

  p,
  div {
    font-family: "Eurostile";
    color: #ff5500;
  }

  .pSaibaMais {
    padding-top: 20px;
    width: 50%;
    margin: 0;
    text-align: end;
  }

  .barraDeModelosAssitencia {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .box {
    display: flex;
    align-items: center;
    gap: 90px;
  }

  .barraLaranja {
    height: 15px;
    width: 50vw;
    background-color: #ff5500;
  }
  .boxBarraLaranjaAssistencia {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
