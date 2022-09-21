import styled from "styled-components";
import image from "../../images/imagens finais/Landing2.png";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;

  @media (max-width:660px) {
    .containerHome {
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: scroll;
  }
  .h3DaHome{
    font-family: "Eurostile";
    font-size: small;
    color: #e3f4ff;
    margin: 0;
  }

}

  @font-face {
    font-family: "Eurostile";
    src: url("../../fonts/eurostile.otf") format("truetype");

  }


  p {
    color: #e3f4ff;
    font-family: "Eurostile";
    font-size: small;
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
    background: url(${image});
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
    margin-top: 250px ;

  }
  /* .barraDeModelos {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  } */

  .barraLaranja {
    height: 15px;
    width: 500px;
    background-color: #ff5500;
  }

  .h3DaHome {
    font-family: "Eurostile";
    font-size: 25px;
    color: #e3f4ff;
    margin: 0;

  }
`;

