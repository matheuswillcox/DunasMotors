import Routes from "./routes";
import Header from "./components/header";
import styled from "styled-components";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Main = styled.main``;

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
