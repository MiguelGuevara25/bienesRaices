import { useState, useEffect, createContext } from "react";

const BienesRaicesContext = createContext();

const BienesRaicesProvider = ({ children }) => {
  const generateId = crypto.randomUUID();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [fotoCasa, setFotoCasa] = useState("");
  const [propiedades, setPropiedades] = useState(() => {
    const guardarPropiedades = localStorage.getItem("propiedadesData");

    if (guardarPropiedades) {
      return JSON.parse(guardarPropiedades);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("propiedadesData", JSON.stringify(propiedades));
  }, [propiedades]);

  const deletePropiedad = (id) => {
    const newPropiedades = propiedades.filter(
      (propiedad) => propiedad.generateId !== id
    );
    setPropiedades(newPropiedades);
  };

  const objectPropiedades = {
    generateId,
    titulo,
    descripcion,
    precio,
    fotoCasa,
  };

  return (
    <BienesRaicesContext.Provider
      value={{
        propiedades,
        titulo,
        descripcion,
        precio,
        setTitulo,
        setDescripcion,
        setPrecio,
        setPropiedades,
        objectPropiedades,
        setFotoCasa,
        fotoCasa,
        deletePropiedad,
      }}
    >
      {children}
    </BienesRaicesContext.Provider>
  );
};

export { BienesRaicesProvider };

export default BienesRaicesContext;
