import styled from "styled-components";


export const Container = styled.div`
  padding: 200px 0 0 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  background: url("https://i.postimg.cc/2SXzMCsg/Landing2.png");
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
    height: 650px;
    align-items: center;
    gap: 30px;
    justify-content: flex-start;
  }
  @media (max-width: 660px) {
    height: fit-content;
    padding-top: 100px;

    .center {
      height: fit-content;
      padding-bottom: 20px;
    }
    .titleTop {
      margin-top: 80px;

      .title {
        font-size: 30px;
      }
      .pButton {
        font-size: 12px;
      }
    }

    .center {
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
    }
  }
`;
