import { ContainerHeader } from "./styled";

import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <ContainerHeader>
        <div className="container">
          <div className="top">
            <div className="left">
              <img
                className="image"
                alt="img"
                onClick={() => handleClick()}
                src={require("../../images/imagens finais/DM_logo_WHITE.png")}
              ></img>
              {/* <img
              className="image"
              alt="img"
              src={require("../../images/CFMOTO_horizontal_cinza.png")}
            ></img>
            <img
              className="image"
              alt="img"
              src={require("../../images/logo-fun-png.png")}
            ></img> */}
            </div>
            <div className="right">
              <div>
                <nav>
                  <ul className="menuNavegacao">
                    <li className="listaDoMenu">Modelos</li>
                    <li className="listaDoMenu">Sobre</li>
                    <li className="listaDoMenu">Assitência Técnica</li>
                    <li className="listaDoMenu">Contato</li>
                  </ul>
                </nav>
              </div>
              <h3 className="phone">
                <FiPhone />
              </h3>
            </div>
          </div>

          {/* <ul className="lista">
          <li className="modelos">
            <UncontrolledExample options={options} />
          </li>
        </ul> */}
        </div>
      </ContainerHeader>
    </>
  );
}

export default Header;
