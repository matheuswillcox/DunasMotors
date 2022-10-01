import { Container } from "./styled";
import { modelsOverflow, modelsOverflowFun } from "../../DB";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function BarraDeModelos() {
  const [filterCF, setFilterCF] = useState("todos");

  const [filterType, setFilterType] = useState("cf");

  const filtered = modelsOverflow.find((item) => item.name === filterCF)?.image;

  const filteredFun = modelsOverflowFun.find(
    (item) => item.name === filterCF
  )?.image;

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
  const allFun = useMemo(
    () =>
      modelsOverflowFun.reduce((acc, next) => {
        acc = [...acc, ...next.image];
        return acc;
      }, []),
    []
  );

  return (
    <>
      <Container>
        <div id="modelos" className="boxBarraLaranja">
          <div className="barraDeModelos">
            <div className="barraLaranja"></div>
            <div className="boxModelosEMarcas">
              <div className="modelos">MODELOS</div>
              <div className="marcas">
                <div
                  className={filterType === "cf" ? "orange" : ""}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setFilterType("cf");
                    setFilterCF("todos");
                  }}
                >
                  CFMOTO
                </div>
                <div
                  className={filterType === "fun" ? "orange" : ""}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setFilterType("fun");
                    setFilterCF("todos");
                  }}
                >
                  FUN MOTORS
                </div>
              </div>
            </div>
          </div>
        </div>

        {filterType === "cf" ? (
          <>
            <ul className="listaDeModelos">
              <li
                className={filterCF === "todos" ? "orange" : "lista"}
                onClick={() => setFilterCF("todos")}
              >
                TODOS
              </li>
              <li
                className={filterCF === "CFORCE" ? "orange" : "lista"}
                onClick={() => setFilterCF("CFORCE")}
              >
                CFORCE
              </li>
              <li
                className={filterCF === "UFORCE" ? "orange" : "lista"}
                onClick={() => setFilterCF("UFORCE")}
              >
                UFORCE
              </li>
              <li
                className={filterCF === "ZFORCE" ? "orange" : "lista"}
                onClick={() => setFilterCF("ZFORCE")}
              >
                ZFORCE
              </li>
            </ul>
            <div className="modelsCards">
              <div className="boxQuads">
                {filterCF === "todos"
                  ? allQuads.map((item, index) => {
                      return (
                        <div className="quadsCards" key={index}>
                          <img
                            className="imageModels"
                            src={item.img}
                            key={item.id}
                            alt="First slide"
                            onClick={() =>
                              handleClick(item.model, item.description)
                            }
                          />
                          <div className="modelsNames">
                            <p>{item.description}</p>
                            <p>{item.model}</p>
                          </div>
                        </div>
                      );
                    })
                  : filtered?.map((item, index) => {
                      return (
                        <>
                          <div className="quadsCards" key={index}>
                            <img
                              className="imageModels"
                              src={item.img}
                              key={item.id}
                              alt="First slide"
                              onClick={() =>
                                handleClick(item.model, item.description)
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
              </div>
            </div>
          </>
        ) : (
          <>
            <ul className="listaDeModelos">
              <li
                className={filterCF === "todos" ? "orange" : "lista"}
                onClick={() => setFilterCF("todos")}
              >
                TODOS
              </li>
              <li
                className={filterCF === "MINI-MOTOS" ? "orange" : "lista"}
                onClick={() => setFilterCF("MINI-MOTOS")}
              >
                MINI-MOTOS
              </li>
              <li
                className={
                  filterCF === "MINI-QUADRICICLOS" ? "orange" : "lista"
                }
                onClick={() => setFilterCF("MINI-QUADRICICLOS")}
              >
                MINI-QUADRICICLOS
              </li>
              <li
                className={filterCF === "QUADRICICLOS" ? "orange" : "lista"}
                onClick={() => setFilterCF("QUADRICICLOS")}
              >
                QUADRICICLOS
              </li>
            </ul>
            <div className="modelsCards">
              <div className="boxQuads">
                {filterCF === "todos"
                  ? allFun.map((item, index) => {
                      return (
                        <div className="quadsCards" key={index}>
                          <img
                            className="imageModels"
                            src={item.img}
                            key={item.id}
                            alt="First slide"
                            onClick={() =>
                              handleClick(item.model, item.description)
                            }
                          />
                          <div className="modelsNames">
                            <p>{item.description}</p>
                            <p>{item.model}</p>
                          </div>
                        </div>
                      );
                    })
                  : filteredFun?.map((item, index) => {
                      return (
                        <div className="quadsCards" key={index}>
                          <img
                            className="imageModels"
                            src={item.img}
                            key={item.id}
                            alt="First slide"
                            onClick={() =>
                              handleClick(item.model, item.description)
                            }
                          />
                          <div className="modelsNames">
                            <p>{item.description}</p>
                            <p>{item.model}</p>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default BarraDeModelos;
