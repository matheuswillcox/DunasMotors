import Routes from "./routes";
import "./App.css";
import Header from "./components/header";
import styled from "styled-components";
import Footer from "./components/footer";

const Main = styled.main`


`

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Main>
        <Routes />
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
