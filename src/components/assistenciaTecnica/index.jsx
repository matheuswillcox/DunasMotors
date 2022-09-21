import { Container } from "./styled";

function AssistenciaTecnica() {
  return (
    <>
      <Container>
        <div className="boxBarraLaranjaAssistencia">
          <div className="barraDeModelosAssitencia">
            <div className="box">
              <div className="modelos">Assistência Técnica</div>
            </div>
            <div className="barraLaranja"></div>
          </div>
        </div>
        <p className="pSaibaMais">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, a!
          Laboriosam, modi quas nesciunt eveniet dignissimos fugit distinctio
          error nisi dolor magnam ab voluptatibus reiciendis eaque ut
          consectetur similique magni?
        </p>
        <div className="pSaibaMais">SAIBA MAIS</div>
      </Container>
    </>
  );
}

export default AssistenciaTecnica;
