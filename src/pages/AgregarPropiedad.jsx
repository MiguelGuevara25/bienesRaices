import useBienesRaices from "../hooks/useBienesRaices";

const AgregarPropiedad = () => {
  const {
    addPropiedad,
    titulo,
    descripcion,
    precio,
    setTitulo,
    setDescripcion,
    setPrecio,
  } = useBienesRaices();

  return (
    <section className="w-[85%] mx-auto mb-10">
      <h1 className="text-4xl my-8 mx-5 md:mx-0 text-center">
        Añadir Propiedad
      </h1>

      <form onSubmit={addPropiedad} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className="uppercase font-bold">
            Titulo de la Propiedad:
          </label>

          <input
            type="text"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título de la Propiedad"
            className="border-b-2 py-3 bg-transparent focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descripcion" className="uppercase font-bold">
            Descripción de la Propiedad:
          </label>

          <textarea
            className="border rounded-lg p-3 h-40 focus:outline-none"
            placeholder="Descripción de la Propiedad"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="precio" className="uppercase font-bold">
            Precio de la propiedad:
          </label>

          <input
            type="text"
            name="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Precio de la Propiedad"
            className="border-b-2 py-3 bg-transparent focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="imagen" className="uppercase font-bold">
            Imagen de la propiedad:
          </label>

          <input type="file" name="imagen" accept=".png, .jpg, .jpeg" />
        </div>

        <div className="flex">
          <input
            type="submit"
            value="Añadir Propiedad"
            className="text-white font-bold uppercase bg-lime-500 py-3 px-7 cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
};

export default AgregarPropiedad;
