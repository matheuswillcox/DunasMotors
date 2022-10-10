import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;

  p {
    color: #e3f4ff;
    font-size: 18px;
  }

  .topContainer {
    display: flex;
    overflow-x: auto;
    align-items: center;
    flex-direction: row;
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

  .boxCard {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px;
    overflow-x: auto;
  }
  .boxCard2 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 95%;
    height: 100%;
    gap: 10px;
    overflow-x: auto;
  }

  .imageHome {
    width: 100%;
    height: 100%;
    margin-top: 250px;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
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

  @media (max-width: 660px) {
    p{
      font-size: 12px;
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
