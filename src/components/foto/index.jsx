import { Container } from "./styled";

function Foto() {
  return (
    <Container>
      <img
        className="imageHome"
        alt="img"
        src={require("../../images/Fotos provisórias/fotoDeBaixo.png")}
      />
    </Container>
  );
}

export default Foto;
