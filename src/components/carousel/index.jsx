import { Carousel } from "react-bootstrap";
import { models } from "../../DB";
import { Container } from "./styled";

function Carrossel({ model, type, name }) {
  const filtered = models.find(
    (item) => item.name === model && item.image?.[0].description === type
  )?.image;
  return (
    <Container>
      <Carousel>
        {filtered?.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.img} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Carrossel;
