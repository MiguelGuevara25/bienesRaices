import { Link } from "react-router-dom";

import useBienesRaices from "../hooks/useBienesRaices";

const Administrador = () => {
  const { propiedades } = useBienesRaices();

  return (
    <section className="w-[85%] mx-auto mb-10">
      <h1 className="text-4xl my-8 mx-5 md:mx-0 text-center">
        Propiedades en Venta
      </h1>

      <Link to={"/agregarpropiedad"}>
        <input
          type="button"
          value="Añadir Propiedad"
          className="text-white font-bold uppercase bg-lime-500 py-3 px-7 cursor-pointer mb-5"
        />
      </Link>

      <table className="table-auto w-full border">
        <thead>
          <tr className="border border-gray-400">
            <th>Título</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {propiedades.map((propiedad) => (
            <tr key={propiedad.id} className="text-center">
              <td>
                <span>{propiedad.titulo}</span>
              </td>

              <td>
                <span>{propiedad.descripcion}</span>
              </td>

              <td>
                <span>{propiedad.precio}</span>
              </td>

              <td>
                <img className="mx-auto" src={propiedad.imagen} width={250} />
              </td>

              <td>
                <input
                  type="button"
                  value="Editar"
                  className="text-white bg-blue-500 py-3 px-7 cursor-pointer mt-5"
                />

                <input
                  type="button"
                  value="Eliminar"
                  className="text-white bg-red-500 py-3 px-7 cursor-pointer mt-5"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="flex flex-col gap-2 shadow-xl border">
        <img src={Anuncio1} alt="" />

        <div className="flex flex-col gap-3 m-4">
          <h3 className="text-center text-2xl">Casa de Lujo en el Lago</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ut
            illum aperiam deserunt alias.
          </p>
          <p className="text-3xl text-lime-500 font-semibold">$3,000,000</p>
        </div>
      </div> */}
    </section>
  );
};

export default Administrador;
