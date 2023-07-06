import Footer from "../components/Footer";
import Contacto3 from "../assets/img/destacada3.webp";

const Contacto = () => {
  return (
    <>
      <main>
        <section className="w-[85%] mx-auto mb-10">
          <h1 className="text-4xl my-8 mx-5 md:mx-0 text-center">
            Contáctanos
          </h1>
          <img src={Contacto3} alt="" />
        </section>

        <section className="w-[85%] mx-auto mb-10">
          <h1 className="text-4xl my-8 mx-5 md:mx-0 text-center">
            Llene el Formulario de contacto
          </h1>

          <div className="flex flex-col gap-10">
            <form className="border border-lime-500 rounded-lg p-5">
              <h3 className="text-center uppercase text-2xl font-bold text-orange-500">
                Información Personal
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="uppercase font-bold">
                    Nombre:
                  </label>

                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    className="border rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="uppercase font-bold">
                    E-Mail:
                  </label>

                  <input
                    type="email"
                    placeholder="Tu E-Mail"
                    className="border rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="telefono" className="uppercase font-bold">
                    Teléfono:
                  </label>

                  <input
                    type="number"
                    placeholder="Tu Telefono"
                    className="border rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="mensaje" className="uppercase font-bold">
                    Mensaje:
                  </label>

                  <textarea
                    className="border rounded-lg p-3 h-40"
                    placeholder="Tu Mensaje"
                  />
                </div>
              </div>
            </form>

            <form className="border border-lime-500 rounded-lg p-5">
              <h3 className="text-center uppercase text-2xl font-bold text-orange-500">
                Información Sobre la Propiedad
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="ventacompra" className="uppercase font-bold">
                    Venta o Compra:
                  </label>

                  <select className="border rounded-lg p-3">
                    <option hidden>- Seleccione -</option>
                    <option value="venta">Venta</option>
                    <option value="compra">Compra</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="precio" className="uppercase font-bold">
                    Precio:
                  </label>

                  <input
                    type="text"
                    placeholder="Tu Precio"
                    className="border rounded-lg p-3"
                  />
                </div>
              </div>
            </form>

            <form className="border border-lime-500 rounded-lg p-5">
              <h3 className="text-center uppercase text-2xl font-bold text-orange-500">
                Información Sobre la Propiedad
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="uppercase font-bold">
                    ¿Como desea ser contactado?
                  </span>

                  <div className="flex gap-5 uppercase">
                    <div className="flex gap-2">
                      <input type="radio" name="telefono" />
                      <label>Teléfono</label>
                    </div>

                    <div className="flex gap-2">
                      <input type="radio" name="email" />
                      <label>E-Mail</label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="fecha" className="uppercase font-bold">
                    Fecha:
                  </label>

                  <input type="date" className="border rounded-lg p-3" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="hora" className="uppercase font-bold">
                    Hora:
                  </label>

                  <input type="time" className="border rounded-lg p-3" />
                </div>
              </div>
            </form>
          </div>

          <input
            type="button"
            value="Enviar"
            className="text-white font-bold uppercase bg-lime-500 hover:bg-lime-600 transition-colors py-3 px-7 cursor-pointer mt-5"
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;
