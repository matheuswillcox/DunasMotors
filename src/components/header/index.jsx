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
            </div>
            <div className="right">
              <div>
                <nav>
                  <ul className="menuNavegacao">
                    <li>
                      <a className="listaDoMenu" href="#modelos">
                        Modelos
                      </a>
                    </li>

                    <li>
                      <a className="listaDoMenu" href="#quemSomos">
                        Quem Somos
                      </a>
                    </li>
                    <li>
                      <a className="listaDoMenu" href="#assistencia">
                        Assitência Técnica
                      </a>
                    </li>
                    <li>
                      <a className="listaDoMenu" href="#contato">
                        Contato
                      </a>
                    </li>
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
