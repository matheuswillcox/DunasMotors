import { ContainerHeader } from "./styled";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import IMAGE from "../../images/imagens finais/DM_logo_WHITE.png";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };


  const NavOptions = [
    { id: 1, title: "Modelos", href: "#modelos" },
    { id: 2, title: "Quem Somos", href: "#quemSomos" },
    { id: 3, title: "Oficina", href: "#assistencia" },
    { id: 4, title: "Contato", href: "#contato" },
  ];

  return (
    <>
      <ContainerHeader>
        <div className="container">
          <div className="top">
            <div className="left">
              <img
                className="image"
                alt="img"
                onClick={handleClick}
                src={IMAGE}
              ></img>
            </div>
            <div className="right">
              <nav>
                <ul className="menuNavegacao">
                  {NavOptions.map((item) => (
                    <li key={item.id}>
                      <a className="listaDoMenu" href={item.href}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <h3 className="phone">
                <FiPhone />
              </h3>
            </div>
          </div>
        </div>
      </ContainerHeader>
    </>
  );
}

export default Header;
