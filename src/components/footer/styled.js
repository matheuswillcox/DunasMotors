import styled from "styled-components";

export const ContainerFooter = styled.div`


  @font-face {
    font-family: "Eurostile";
    src: url("../../fonts/eurostile.otf") format("truetype");
  }
  background-color: #000;
  height: 100%;
  padding-top: 20px;


  .containerFooter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px;
  }
  .dadosDeContato {
    color: white;
    font-family: "Eurostile";
  }
  .divEmojis {
    display: flex;

    gap: 20px;
  }
  .emojis {
    color: white;
    font-size: 40px;
  }
`;
