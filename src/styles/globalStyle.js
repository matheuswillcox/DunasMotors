import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Eurostile";
    src: url("/src/assets/fonts/Eurostile.otf");
  }

  :root {
    --primary: #F7F5F5;
    --secondary: #666666;
    --border: #D6805B; 
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-size: 1rem;
      vertical-align: baseline;
      font-family: 'Eurostile';
    }

  
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1;
    }

    ol, ul {
	    list-style: none;
    }
    
    a {
      text-decoration: none;
    }
    button {
      cursor: pointer;
      font-family: 'Chango', cursive;
    }

`;

export default GlobalStyle;
