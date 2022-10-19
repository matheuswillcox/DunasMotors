import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;

  p {
    width: 50%;
    margin: 0;
    color: #606060;
    padding: 20px;
    text-align: justify;
  }
  div {
    color: #ff5500;
  }

  .barraDeModelosQuemSomos {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .barraLaranja {
    height: 15px;
    width: 50vw;
    background-color: #ff5500;
  }
  .boxBarraLaranjaQuemSomos {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: flex-start;
  }
  .imageQuemSomosCF {
    width: 150px;
    height: 120px;
  }
  .imageQuemSomos {
    width: 120px;
    height: 60px;
  }
  .images {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 20px;
  }
  .boxCentral {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 660px) {
    .boxBarraLaranjaQuemSomos {
    }
    .boxCentral {
      padding-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        width: 90%
      }
    }
  }
`;
