function ModelsTypes({ modelOptions }) {
  return (
    <div className="boxModelosEMarcas">
      <div className="modelos">MODELOS</div>
      <div className="marcas">
        {modelOptions.map((item) => (
          <div key={item.id} className={item.className} onClick={item.onClick}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModelsTypes;
