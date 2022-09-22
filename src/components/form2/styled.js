import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: #ff5500;
  padding: 20px;
  border-radius: 0px;

  @media (max-width: 660px) {


    .formulario {
        flex-direction: column;
  }
  

  }

  form {
    margin: 0;
  }
  .boxForm{
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
    align-items: flex-start;
    gap: 10px;
  }
  .inputLeft{
    width: 100%;
    height: 40px;

  }

  .solicitar {
    color: white;
  }

  .formulario {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0;
  }
  .formRight{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
 
    
  }
  .sugestao {
    width: 335px;
    height: 170px;
  }

  .button {
    width: 100px;
    height: 50px;
    border: none;
    background-color: white;
    border-radius: 10px;
    color: #ff5500 ;
  }
  .span {
    font-size: 10px;
    color: white;
  }

  .divCheck {
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
