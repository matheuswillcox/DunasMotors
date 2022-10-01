import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  p,
  div {
    color: #ff5500;
  }

  .pSaibaMais {
    padding: 20px;
    width: 50%;
    margin: 0;
    text-align: justify;
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

  @media (max-width: 660px) {
    align-items: center;
    .pSaibaMais {
      width: 90%;
    }
  }
`;
