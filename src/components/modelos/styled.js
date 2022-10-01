import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 100vw;

  @media (max-width: 660px) {
    .barraLaranja {
      height: 15px;
      width: 50%;
      background-color: #ff5500;
      overflow-x: scroll;
    }
    .barraDeModelos {
      display: flex;
      overflow-x: scroll;
      gap: 5px;
    }

    .listaDeModelos {
      display: flex;
      align-items: center;
      overflow-x: scroll;
      padding-left: 5px;
      font-size: 10px;
      padding: 10px;
    }
    .lista {
      font-size: 12px;
    }
    .boxModelosEMarcas {
      font-size: 12px;
      margin-right: 2px;
      gap: 0px;
    }
  }

  div {
    color: #606060;
  }
  .orange {
    color: #ff5500;
  }

  .modelsNames {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #606060;
  }

  .barraDeModelos {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .boxModelosEMarcas {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .modelsCards {
    display: flex;
    overflow-x: auto;
    width: 100%;
  }

  .marcas {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .barraLaranja {
    height: 15px;
    width: 50vw;
    background-color: #ff5500;
  }
  .boxBarraLaranja {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: flex-start;
  }

  .listaDeModelos {
    padding-top: 30px;
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
  }

  .imageModels {
    width: auto;
    height: 200px;
    cursor: pointer;
  }

  .boxQuads {
    display: flex;
    overflow-x: auto;
  }

  .lista {
    cursor: pointer;
    color: #606060;
  }
`;
