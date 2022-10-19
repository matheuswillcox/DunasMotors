import { useNavigate } from "react-router-dom";

function ModelsRender({ typeOptions, filterType, reducedQuads, filterCF }) {
  const navigate = useNavigate();

  const handleClick = (item, model) => {
    navigate(`/modelos/${model}/${item}`);
  };

  const handleFilter = (item) => {
    if (filterCF === "todos") {
      return item.type === filterType;
    }
    return item.type === filterType && filterCF === item.category;
  };
  
  return (
    <>
      <ul className="listaDeModelos">
        {typeOptions
          .filter((item) => item.type === filterType)
          .map((item) => (
            <li key={item.id} className={item.className} onClick={item.onClick}>
              {item.title}
            </li>
          ))}
      </ul>

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

    </>
  );
}

export default ModelsRender;
