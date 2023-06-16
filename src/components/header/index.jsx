import { ContainerHeader } from "./styled";
import { useNavigate } from "react-router-dom";
import IMAGE from "../../images/imagens finais/DM_logo_WHITE.png";
import { BsWhatsapp } from "react-icons/bs";
function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const NavOptions = [
    { id: 1, title: "MODELOS", href: "#modelos" },
    { id: 2, title: "QUEM SOMOS", href: "#quemSomos" },
    { id: 3, title: "OFICINA", href: "#assistencia" },
    { id: 4, title: "CONTATO", href: "#contato" },
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
                      <a
                        onClick={handleClick}
                        className="listaDoMenu"
                        href={item.href}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <a className="WA" href="whatsapp://send?text=Olá Dunas Motors, gostaria de informações sobre seus produtos.&phone=+558592584553">
                  {" "}
                  <BsWhatsapp className="emojis" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </ContainerHeader>
    </>
  );
}

export default Header;
