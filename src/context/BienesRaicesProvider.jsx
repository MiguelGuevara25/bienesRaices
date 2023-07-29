import { useState, useEffect, createContext } from "react";


const BienesRaicesContext = createContext();

const BienesRaicesProvider = ({ children }) => {
  const generateId = crypto.randomUUID();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
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

  const objectPropiedades = { generateId, titulo, descripcion, precio };

  const addPropiedad = (e) => {
    e.preventDefault();
    setPropiedades([...propiedades, objectPropiedades]);

    console.log("Las propiedades son:", propiedades);
  };

  return (
    <BienesRaicesContext.Provider
      value={{
        propiedades,
        addPropiedad,
        titulo,
        descripcion,
        precio,
        setTitulo,
        setDescripcion,
        setPrecio,
      }}
    >
      {children}
    </BienesRaicesContext.Provider>
  );
};

export { BienesRaicesProvider };

export default BienesRaicesContext;
