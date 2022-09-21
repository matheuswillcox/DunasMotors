import styled from "styled-components";


export const ContainerHeader = styled.div`

@font-face {
  font-family: 'Eurostile';
  src: url('../../fonts/eurostile.otf') format('truetype');

  
}

@media (max-width: 660px) {
    .image{
        width: auto;
        height: 80px;
    }

    .right {

        overflow-x: scroll;
  }

  .top {
    flex-direction: column;
  }
  .listaDoMenu{

    font-size: small;
  }

    }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    /* background-image: linear-gradient(to bottom  ,#FF5500, white ); */
  }

  .container {
    position: absolute;
    top: 0;
  }

  .image {
    width: 180px;
    cursor: pointer;
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .menuNavegacao {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 0;
    color: #E3F4FF;

  }
  .listaDoMenu{
    font-family: "Eurostile";

  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .title,
  .phone {
    font-size: 20px;
    color: #E3F4FF;
  }

  .modelos {
  }
`;
