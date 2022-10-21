import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #ff5500;
  padding: 20px;
  border-radius: 0px;

  p {
    margin: 0;
  }

  .pForm {
    margin: 10px 0;
  }

  form {
    margin: 0;
  }

  .politica {
    font-size: 10px;
  }
  .error {
    font-size: 10px;
  }
  .errorForm {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
  }
  .errorTerms {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
  }
  .boxForm2 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .formLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    align-items: flex-start;
    gap: 10px;
    width: 400px;
  }

  .inputLeft {
    width: 100%;
    height: 40px;
  }

  .sugestao,
  .inputLeft {
    padding-left: 5px;
  }

  .solicitar {
    color: white;
  }

  .formulario2 {
    display: flex;
    height: 100%;
    align-items: start;
    justify-content: center;
    gap: 10px;
    margin: 0;
  }
  .formRight2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 332px;
    gap: 10px;
    text-align: left;
  }
  .comentario {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .sugestao {
    padding-top: 5px;
    width: 335px;
    height: 230px;
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
    margin-top: 5px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 660px) {
    align-items: center;
    justify-content: center;
    .formulario2 {
      flex-direction: column;
    }

    .formLeft2 {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  }
`;
