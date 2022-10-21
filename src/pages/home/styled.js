import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: #e3f4ff;
    font-size: 18px;
  }

  .topContainer {
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  .containerHome {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 100px 0 0 0;
    text-align: center;
    background: url("https://i.postimg.cc/2SXzMCsg/Landing2.png");
    background-size: cover;
  }

  .boxCard1 {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    gap: 10px;
    width: 33%;
    height: 500px;
    .imageHome {
      width: 300px;
    }
  }
  .boxCard2 {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    gap: 10px;
    width: 33%;
    height: 500px;
    .imageHome {
      width: 300px;
    }
  }
  .boxCard3 {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    gap: 10px;
    width: 33%;
    height: 500px;
    .imageHome {
      width: 300px;
    }
  }

  .imageHome {
    cursor: pointer;
    :hover {
      transition: transform 0.2s;
      transform: scale(1.3);
    }
  }

  .barraLaranja {
    height: 15px;
    width: 500px;
    background-color: #ff5500;
  }

  .h3DaHome {
    font-size: 35px;
    color: #e3f4ff;
    margin: 0;
  }

  @media (max-width: 860px) {
    p {
      font-size: 12px;
    }
    .boxCard1,
    .boxCard2,
    .boxCard3 {
      .imageHome {
        width: 100px;
      }
    }

    .containerHome {
      display: flex;
      align-items: center;
      flex-direction: column;
      overflow-x: scroll;
    }
    .h3DaHome {
      font-size: 18px;
      color: #e3f4ff;
      margin: 0;
    }
  }
`;
