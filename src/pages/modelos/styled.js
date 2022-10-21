import styled from "styled-components";
import image from "../../images/imagens finais/Landing2.png";

export const Container = styled.div`
  padding: 200px 0 0 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  background: url(${image});
  background-size: cover;

  .titleTop {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    }

  .title {
    font-size: 10px;
    color: #e3f4ff;
    font-size: 40px;

  }
  .pButton {
    color: #e3f4ff;
    font-size: 18px;
    cursor: pointer;
  }
  .center {
    display: flex;
    height: 500px;
    align-items: center;
    gap: 30px;
    justify-content: flex-start;
  }
  @media (max-width: 660px) {
    height: auto;
    .titleTop {
      margin-top: 80px;

    }
    .title{
      font-size: 30px;
    }
    .pButton{
      font-size: 12px;
    }

    .center {
      flex-direction: column-reverse;
    }
  }
`;
