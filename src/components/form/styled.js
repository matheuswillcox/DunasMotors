import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: auto;

  padding-left: 20px;
  border-radius: 0px;

  @font-face {
    font-family: "Eurostile";
    src: url("../../fonts/eurostile.otf") format("truetype");
  }

  p {
    margin: 0;
    font-family: "Eurostile";
    color: white;
  }

  @media (max-width: 660px) {

  }

  form {
    margin: 0;
  }
  .error{
    font-size: 10px;
    font-family: "Eurostile";
    color: white;
  }
  .errorForm {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
  }
  .errorTerms{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;

  }
  .boxForm {
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
    height: 332px;
    align-items: flex-start;
    gap: 10px;
  }
  .inputLeft {
    width: 100%;
    height: 40px;
  }

  .solicitar {
    color: white;
  }

  .formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0;
  }
  .formRight {
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
    gap: 10px;
    align-items: flex-start;
  }
  .sugestao {
    width: 340px;
    height: 130px;
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
    font-family: "Eurostile";
    font-size: 10px;
    color: white;

  }

  .divCheck {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
  .divCheckTerm{
    display: flex;
    flex-direction: column ;
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
`;
