import { Container } from "./styled";

function AssistenciaTecnica() {
  return (
    <Container>
      <div id="assistencia" className="boxBarraLaranjaAssistencia">
        <div className="barraDeModelosAssitencia">
          <div className="box">
            <div className="modelos">OFICINA</div>
          </div>
          <div className="barraLaranja"></div>
        </div>
      </div>
      <p className="pSaibaMais">
        A política de pós-venda foi definida em observação à importância da
        oficina ser especializada no ramo do off road e primando pela máxima
        atenção ao cliente, sendo designado parceiro comercial com ampla
        expertise no setor. Planet Racing, Endereço: Rua Sebastião de Abreu, 200, Maraponga, Fortaleza/CE - CEP 60.170-830. 
        Contato: (85) 99671 0509

      </p>
    </Container>
  );
}

export default AssistenciaTecnica;
