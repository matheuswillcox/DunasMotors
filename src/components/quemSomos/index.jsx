import { Container } from "./styled";
import verticalImage from "../../images/imagens finais/CF vertical.png";
import logoImage from "../../images/Fotos provisórias/logo-fun-png.png";

function QuemSomos() {
  return (
    <Container>
      <div id="quemSomos" className="boxBarraLaranjaQuemSomos">
        <div className="barraDeModelosQuemSomos">
          <div className="barraLaranja"></div>
          <div>QUEM SOMOS</div>
        </div>
      </div>
      <div className="boxCentral">
        <div className="images">
          <img className="imageQuemSomosCF" alt="img" src={verticalImage} />
          <img className="imageQuemSomos" alt="img" src={logoImage} />
        </div>
        <p>
          A DUNAS MOTORS em parceria com a CFMOTO e a FUNMOTORS, comercializa
          produtos Off-Road para lazer, trabalho e infantil, fabricados no
          Brasil, primando pela excelência de qualidade dos equipamentos,
          especial atendimento na venda e eficiência no pós-venda, visando
          proporcionar a melhor experiência aos seus clientes.
        </p>
      </div>
    </Container>
  );
}

export default QuemSomos;
