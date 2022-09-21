import { Container } from "./styled";
import { modelsOverflow } from "../../DB";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function BarraDeModelos() {
  const [filter, setFilter] = useState("todos");

  const filtered = modelsOverflow.find((item) => item.name === filter)?.image;

  const navigate = useNavigate();

  const handleClick = (item, model) => {
    navigate(`/modelos/${model}/${item}`);
  };

  const allQuads = useMemo(
    () =>
      modelsOverflow.reduce((acc, next) => {
        acc = [...acc, ...next.image];
        return acc;
      }, []),
    []
  );

  return (
    <>
      <Container>
        <div className="boxBarraLaranja">
          <div className="barraDeModelos">
            <div className="barraLaranja"></div>
            <div className="boxModelosEMarcas">
              <div className="modelos">MODELOS</div>
              <div className="marcas">
                <div>CFMOTO</div>
                <div>FUN MOTORS</div>
              </div>
            </div>
          </div>
        </div>
        <ul className="listaDeModelos">
          <li className="lista" onClick={() => setFilter("todos")}>
            TODOS
          </li>
          <li className="lista" onClick={() => setFilter("CFORCE")}>
            CFORCE
          </li>
          <li className="lista" onClick={() => setFilter("UFORCE")}>
            UFORCE
          </li>
          <li className="lista" onClick={() => setFilter("ZFORCE")}>
            ZFORCE
          </li>
        </ul>

        <div className="modelsCards">
          <div className="boxQuads">
            {filter === "todos"
              ? allQuads.map((item) => {
                  return (
                    <>
                      <div className="quadsCards">
                        <img
                          className="imageModels"
                          src={item.img}
                          key={item.id}
                          alt="First slide"
                          onClick={() =>
                            handleClick(item.model, item.description, item.name)
                          }
                        />
                        <div className="modelsNames">
                          <p>{item.description}</p>
                          <p>{item.model}</p>
                        </div>
                      </div>
                    </>
                  );
                })
              : filtered?.map((item) => {
                return (
                  <>
                    <div className="quadsCards">
                      <img
                        className="imageModels"
                        src={item.img}
                        key={item.id}
                        alt="First slide"
                        onClick={() =>
                          handleClick(item.model, item.description, item.name)
                        }
                      />
                      <div className="modelsNames">
                        <p>{item.description}</p>
                        <p>{item.model}</p>
                      </div>
                    </div>
                  </>
                );
              })}

            {/* <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1083.jpeg"
              }
            ></img>{" "}
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1084.jpeg"
              }
            ></img>{" "}
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1085.jpeg"
              }
            ></img>
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1086.jpeg"
              }
            ></img>
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1087.jpeg"
              }
            ></img>
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1092.jpeg"
              }
            ></img>
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1091.jpeg"
              }
            ></img>
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1088.jpeg"
              }
            ></img>
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1089.jpeg"
              }
            ></img>
          </div>
          <div className="boxCard">
            <img
              className="imageModels"
              alt="img"
              src={
                "https://api.dealersites.com.br/images/novos/cfmoto/models/original_model_1090.jpeg"
              }
            ></img> */}
          </div>
        </div>
      </Container>
    </>
  );
}

export default BarraDeModelos;
