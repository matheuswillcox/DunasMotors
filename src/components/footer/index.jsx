import { ContainerFooter } from "./styled";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


function Footer() {


  return (
    <>
      <ContainerFooter>
        <div id="contato" className="containerFooter">
          <div className="dadosDeContato">FORTELEZA</div>
          <div className="dadosDeContato">
            RUA DA ESTRELA, 123 - Bairro - Fortaleza - CE
          </div>
          <div className="dadosDeContato">Fone: 3322-3322</div>
          <div className="divEmojis">
            <a target="_blank" href="https://www.instagram.com/dunasmotors/" rel="noreferrer">
            <BsInstagram className="emojis"/>
            </a>
            <a href="mailto:dunas@dunas.com.br">
            <MdEmail className="emojis" />
            </a>
            <BsWhatsapp className="emojis" />
          </div>
          <div className="dadosDeContato">Todos os direitos reservados</div>
        </div>
      </ContainerFooter>
    </>
  );
}

export default Footer;
