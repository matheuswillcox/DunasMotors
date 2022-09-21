import { ContainerFooter } from "./styled";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


function Footer() {


  return (
    <>
      <ContainerFooter>
        <div className="containerFooter">
          <div className="dadosDeContato">FORTELEZA</div>
          <div className="dadosDeContato">
            RUA DA ESTRELA, 123 - Bairro - Fortaleza - CE
          </div>
          <div className="dadosDeContato">Fone: 3322-3322</div>
          <div className="divEmojis">
            <BsInstagram className="emojis" />
            <MdEmail className="emojis" />
            <BsWhatsapp className="emojis" />
          </div>
          <div className="dadosDeContato">Todos os direitos reservados</div>
        </div>
      </ContainerFooter>
    </>
  );
}

export default Footer;
