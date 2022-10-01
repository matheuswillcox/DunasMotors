import { Container } from "./styled";
import { modelsOverflow, modelsOverflowFun } from "../../DB";
import { useMemo, useState } from "react";
import ModelsTypes from "./templates/modelsTypes";
import useOptions from "./hooks/useOptions";
import ModelsRender from "./templates/modelsRender";

function BarraDeModelos() {
  const [filterCF, setFilterCF] = useState("todos");

  const [filterType, setFilterType] = useState("cf");

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

  return (
    <Container>
      <div id="modelos" className="boxBarraLaranja">
        <div className="barraDeModelos">
          <span className="barraLaranja" />
          <ModelsTypes modelOptions={modelOptions} />
        </div>
      </div>

      <ModelsRender
        reducedQuads={reducedQuads}
        typeOptions={typeOptions}
        filterCF={filterCF}
        filterType={filterType}
      />
    </Container>
  );
}

export default BarraDeModelos;
