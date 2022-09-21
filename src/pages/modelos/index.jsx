import Carrossel from "../../components/carousel";
import Form from "../../components/form";
import { Container } from "./styled";

const Modelos = ({ model, name }) => {
  return (
    <div>
      <Container>
        <div className="titleTop">
          <h2 className="title">ZFORCE {model}</h2>
          <p className="p">ESPECIFICAÇÕES TÉCNICAS</p>
        </div>
        <div className="center">
          <Form />
          <Carrossel model={model} />
        </div>
      </Container>
    </div>
  );
};

export default Modelos;
