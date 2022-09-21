import { Container } from "./styled";

function QuemSomos() {
  return (
    <>
      <Container>
        <div className="boxBarraLaranjaQuemSomos">
          <div className="barraDeModelosQuemSomos">
            <div className="barraLaranja"></div>
            <div>QUEM SOMOS</div>
          </div>
        </div>
        <div className="boxCentral">
          <div className="images">
            <img
              className="imageQuemSomosCF"
              alt="img"
              src={require("../../images/imagens finais/CF vertical.png")}
            ></img>{" "}
            <img
              className="imageQuemSomos"
              alt="img"
              src={require("../../images/Fotos provisórias/logo-fun-png.png")}
            ></img>{" "}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, a!
            Laboriosam, modi quas nesciunt eveniet dignissimos fugit distinctio
            error nisi dolor magnam ab voluptatibus reiciendis eaque ut
            consectetur similique magni?
          </p>
        </div>
      </Container>
    </>
  );
}

export default QuemSomos;
