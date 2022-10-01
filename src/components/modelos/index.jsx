import { Container } from "./styled";
import { modelsOverflow, modelsOverflowFun } from "../../DB";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function BarraDeModelos() {
  const navigate = useNavigate();
  const [filterCF, setFilterCF] = useState("todos");

  const [filterType, setFilterType] = useState("cf");

  const handleClick = (item, model) => {
    navigate(`/modelos/${model}/${item}`);
  };

  const reducedQuads = useMemo(
    () =>
      [...modelsOverflow, ...modelsOverflowFun].reduce((acc, next) => {
        acc = [...acc, ...next.image];
        return acc;
      }, []),
    []
  );

  const handleType = (type) => {
    setFilterType(type);
    setFilterCF("todos");
  };

  const modelOptions = [
    {
      id: 1,
      className: filterType === "cf" ? "pointer orange" : "pointer",
      title: "CFMOTO",
      onClick: () => handleType("cf"),
    },
    {
      id: 2,
      className: filterType === "fun" ? "pointer orange" : "pointer",
      title: "FUN MOTORS",
      onClick: () => handleType("fun"),
    },
  ];

  const checkTypeClass = (type) => (filterCF === type ? "orange" : "lista");

  const typeOptions = [
    {
      id: 1,
      onClick: () => setFilterCF("todos"),
      title: "TODOS",
      className: checkTypeClass("todos"),
      type: "cf",
    },
    {
      id: 2,
      onClick: () => setFilterCF("CFORCE"),
      title: "CFORCE",
      className: checkTypeClass("CFORCE"),
      type: "cf",
    },
    {
      id: 3,
      onClick: () => setFilterCF("UFORCE"),
      title: "UFORCE",
      className: checkTypeClass("UFORCE"),
      type: "cf",
    },
    {
      id: 4,
      onClick: () => setFilterCF("ZFORCE"),
      title: "ZFORCE",
      className: checkTypeClass("ZFORCE"),
      type: "cf",
    },
    {
      id: 5,
      onClick: () => setFilterCF("todos"),
      title: "TODOS",
      className: checkTypeClass("todos"),
      type: "fun",
    },
    {
      id: 6,
      onClick: () => setFilterCF("MINI-MOTOS"),
      title: "MINI-MOTOS",
      className: checkTypeClass("MINI-MOTOS"),
      type: "fun",
    },
    {
      id: 7,
      onClick: () => setFilterCF("MINI-QUADRICICLOS"),
      title: "MINI-QUADRICICLOS",
      className: checkTypeClass("MINI-QUADRICICLOS"),
      type: "fun",
    },
    {
      id: 8,
      onClick: () => setFilterCF("QUADRICICLOS"),
      title: "QUADRICICLOS",
      className: checkTypeClass("QUADRICICLOS"),
      type: "fun",
    },
  ];

  const handleFilter = (item) => {
    if (filterCF === "todos") {
      return item.type === filterType;
    }
    return item.type === filterType && filterCF === item.category;
  };

  return (
    <>
      <Container>
        <div id="modelos" className="boxBarraLaranja">
          <div className="barraDeModelos">
            <span className="barraLaranja" />
            <div className="boxModelosEMarcas">
              <div className="modelos">MODELOS</div>
              <div className="marcas">
                {modelOptions.map((item) => (
                  <div
                    key={item.id}
                    className={item.className}
                    onClick={item.onClick}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ul className="listaDeModelos">
          {typeOptions
            .filter((item) => item.type === filterType)
            .map((item) => (
              <li
                key={item.id}
                className={item.className}
                onClick={item.onClick}
              >
                {item.title}
              </li>
            ))}
        </ul>
        <div className="modelsCards">
          <div className="boxQuads">
            {reducedQuads.filter(handleFilter).map((item, index) => {
              return (
                <div className="quadsCards" key={index}>
                  <img
                    className="imageModels"
                    src={item.img}
                    key={item.id}
                    alt="First slide"
                    onClick={() => handleClick(item.model, item.description)}
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
      </Container>
    </>
  );
}

export default BarraDeModelos;
