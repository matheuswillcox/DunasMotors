import { Container } from "./styled";
import { modelsOverflow, modelsOverflowFun } from "../../DB";
import { useMemo, useState } from "react";
import ModelsTypes from "./modelsTypes";
import { useNavigate } from "react-router-dom";
import useOptions from "./useOptions";

function BarraDeModelos() {
  const [filterCF, setFilterCF] = useState("todos");

  const [filterType, setFilterType] = useState("cf");

  const navigate = useNavigate();

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

  const { modelOptions, typeOptions } = useOptions(
    handleType,
    filterType,
    filterCF,
    setFilterCF
  );

  const handleFilter = (item) => {
    if (filterCF === "todos") {
      return item.type === filterType;
    }
    return item.type === filterType && filterCF === item.category;
  };

  const handleClick = (item, model) => {
    navigate(`/modelos/${model}/${item}`);
  };

  return (
    <Container>
      <div id="modelos" className="boxBarraLaranja">
        <div className="barraDeModelos">
          <span className="barraLaranja" />

          <ModelsTypes modelOptions={modelOptions} />
        </div>
      </div>
      <ul className="listaDeModelos">
        {typeOptions
          .filter((item) => item.type === filterType)
          .map((item) => (
            <li key={item.id} className={item.className} onClick={item.onClick}>
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
  );
}

export default BarraDeModelos;
