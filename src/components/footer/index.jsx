import { ContainerFooter } from "./styled";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <ContainerFooter>
        <div id="contato" className="containerFooter">
          <div className="dadosDeContato">
            Avenida Senador Virgílio Távora, 2001, Aldeota, CEP 60.170-079
          </div>
          <div className="dadosDeContato"> Fortaleza/CE</div>
          <div className="dadosDeContato">E-mail: dunasmotors@hotmail.com</div>
          <div className="dadosDeContato">Fone: 3322-3322</div>
          <div className="divEmojis">
            <a
              target="_blank"
              href="https://www.instagram.com/dunasmotors/"
              rel="noreferrer"
            >
              <BsInstagram className="emojis" />
            </a>
            <a href="mailto:dunasmotors@hotmail.com">
              <MdEmail className="emojis" />
            </a>
            <a href="whatsapp://send?text=Olá Dunas Motors, gostaria de informações sobre seus produtos.&phone=+5581996898720">
              {" "}
              <BsWhatsapp className="emojis" />
            </a>
          </div>
          <div className="dadosDeContato">Todos os direitos reservados</div>
        </div>
      </ContainerFooter>
    </>
  );
}

export default Footer;
