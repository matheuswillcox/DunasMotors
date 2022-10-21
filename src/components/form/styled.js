import styled from "styled-components";

export const ContainerForm = styled.div`
  width: auto;
  height: auto;
  border-radius: 0px;

  .boxForm {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 25px;
    border-radius: 5px;
    background-color: rgb(0, 0, 0, 0.2);

    .solicitar {
      color: white;
    }

    .formulario {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 10px;
      margin: 0;

      .formLeft {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 332px;
        align-items: flex-start;
        gap: 10px;
      }

      .formRight {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        gap: 10px;
        text-align: left;
      }
    }
  }

  p {
    margin: 0;
    color: white;
  }

  form {
    margin: 0;
  }
  .error {
    font-size: 10px;
    color: white;
  }
  .errorForm {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
  }

  .politica {
    font-size: 10px;
  }
  .errorTerms {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
  }

  .inputLeft {
    width: 100%;
    height: 40px;
    padding-left: 5px;
  }

  .comentario {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    
  }
  .sugestao {
    width: 340px;
    height: 130px;
    padding-left: 5px;
  }

  .button {
    width: 100px;
    height: 50px;
    border: none;
    background-color: white;
    border-radius: 10px;
    color: #ff5500;
  }
  .span {
    font-size: 10px;
    color: white;
  }

  .divCheck {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
  .divCheckTerm {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
  }
  .box {
    display: flex;
    align-items: center;
  }

  .checkBox {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 660px) {
    .boxForm{
      width: fit-content;
      padding: 10px;
    }
    .sugestao{
      width: 300px;
    }

  }
`;
