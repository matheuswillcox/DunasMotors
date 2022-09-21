import { Container } from "./styled";

function Foto() {
  return (
    <>
      <Container>
      <img
                className="imageHome"
                alt="img"
                src={require("../../images/Fotos provisórias/fotoDeBaixo.png")}
              ></img>{" "}
      </Container>
    </>
  );
}

export default Foto;
