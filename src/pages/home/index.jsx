import QuemSomos from "../../components/quemSomos";
import BarraDeModelos from "../../components/modelos";
import { ContainerHome } from "./styled";
import AssistenciaTecnica from "../../components/assistenciaTecnica";
import Foto from "../../components/foto";
import Form2 from "../../components/form2";

function Home() {
  return (
    <>
      <ContainerHome>
        <div className="containerHome">
          <div className="topContainer">
            <div className="boxCard">
              <img
                className="imageHome"
                alt="img"
                src={require("../../images/Fotos provisórias/uforce grey.png")}
              />
              <h3 className="h3DaHome">UFORCE</h3>
              <p>600</p>
            </div>
            <div className="boxCard">
              <img
                className="imageHome"
                alt="img"
                src={require("../../images/Fotos provisórias/cForce CAPA menor.png")}
              />
              <h3 className="h3DaHome">CFORCE</h3>
              <p>1000</p>
            </div>
            <div className="boxCard2">
              <img
                className="imageHome"
                alt="img"
                src={require("../../images/Fotos provisórias/zforce red menor.png")}
              />
              <h3 className="h3DaHome">ZFORCE</h3>
              <p>1000 Sport</p>
            </div>
          </div>
        </div>
      </ContainerHome>
      <QuemSomos />
      <BarraDeModelos />
      <AssistenciaTecnica />
      <Foto />
      <Form2 />
    </>
  );
}

export default Home;
