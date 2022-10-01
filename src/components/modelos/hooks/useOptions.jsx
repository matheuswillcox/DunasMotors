const useOptions = (handleType, filterType, filterCF, setFilterCF) => {
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

  return { modelOptions, typeOptions };
};

export default useOptions;
