import { ContainerFooter } from "./styled";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <ContainerFooter>
        <div id="contato" className="containerFooter">
          <div className="dadosDeContato">
          CEARÁ: Avenida Doutor Theberge, 2111 - lojas 02 e 07 - Presidente Kennedy, Fortaleza, CE - CEP 60.355-000
        
          </div>
          <div className="dadosDeContato">
          PERNAMBUCO: Rua Visconde de Inhaúma, 951 - Maurício de Nassau, Caruaru, PE - CEP 55.014-410
          </div>
       
          <div className="dadosDeContato">E-mail: dunasmotors@hotmail.com</div>
          {/* <div className="dadosDeContato">Fone: 3322-3322</div> */}
          <div className="divEmojis">
            <a
              target="_blank"
              href="https://www.instagram.com/dunascfmoto/"
              rel="noreferrer"
            >
              <BsInstagram className="emojis" />
            </a>
            <a
              href="mailto:dunasmotors@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail className="emojis" />
            </a>
            <a
              href="whatsapp://send?text=Olá Dunas Motors, gostaria de informações sobre seus produtos.&phone=+5585997305671"
              target="_blank"
              rel="noreferrer"
            >
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
