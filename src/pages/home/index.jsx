import QuemSomos from "../../components/quemSomos";
import BarraDeModelos from "../../components/modelos";
import { ContainerHome } from "./styled";
import AssistenciaTecnica from "../../components/assistenciaTecnica";
import Foto from "../../components/foto";
import Form2 from "../../components/form2";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const myRef = useRef(null);

  const navigate = useNavigate();


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
                onClick={() =>  navigate(`/modelos/uforce/600`)}
                
              />
              <h3 className="h3DaHome">UFORCE</h3>
              <p>600</p>
            </div>
            <div className="boxCard">
              <img
                className="imageHome"
                alt="img"
                src={require("../../images/Fotos provisórias/cForce CAPA menor.png")}
                onClick={() =>  navigate(`/modelos/cforce/1000`)}
              />
              <h3 className="h3DaHome">CFORCE</h3>
              <p>1000</p>
            </div>
            <div className="boxCard2">
              <img
                ref={myRef}
                className="imageHome"
                alt="img"
                onClick={() =>  navigate(`/modelos/zforce/1000sport`)}
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
