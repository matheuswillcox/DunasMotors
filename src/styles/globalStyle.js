import { createGlobalStyle } from "styled-components";
import EUROSTILE from "../assets/fonts/Eurostile.otf";
import EUROSTILEBOLD from "../assets/fonts/Eurostile-bold.otf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Eurostile";
    src: url('${EUROSTILE}');
  }

  :root {
    --primary: #F7F5F5;
    --secondary: #666666;
    --border: #D6805B; 
  }

  * {
      /* border: 1px red solid;     */
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-size: 1rem;
      vertical-align: baseline;
      font-family: 'Eurostile';
    }

    .pointer{
      cursor: pointer;
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
      font-family: 'Eurostile';
    }

`;

export default GlobalStyle;
