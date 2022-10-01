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
        expertise no setor. Endereço: Scuderia Racing Box Av. Manoel Mavignier,
        nº 6323, Sabiaguaba – CEP: 60835-025 – Fortaleza/CE Contato: (85) 99904
        3323
      </p>
    </Container>
  );
}

export default AssistenciaTecnica;
