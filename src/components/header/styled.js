import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  nav{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .WA{
    color: green;
  }
  .emojis{
    width: 30px;
    height: 30px;
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
    width: 350px;
    height: auto;
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
    color: #e3f4ff;
  }
  .listaDoMenu {
    text-decoration: none;
    color: #e3f4ff;
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
    color: #e3f4ff;
  }

  .modelos {
  }

  @media (max-width: 660px) {
    .image {
      width: auto;
      height: 80px;
    }

    .right {
      overflow-x: scroll;
    }

    .top {
      flex-direction: column;
    }
    .listaDoMenu {
      font-size: small;
    }
  }
`;
