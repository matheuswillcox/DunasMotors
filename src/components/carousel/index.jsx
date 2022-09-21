import { Carousel } from "react-bootstrap";
import { models } from "../../DB";
import { Container } from "./styled";

function Carrossel({ model }) {
  const filtered = models.find((item) => item.name === model)?.image;
  return (
    <Container>
      <Carousel>
        {filtered?.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.img} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.model}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Carrossel;
