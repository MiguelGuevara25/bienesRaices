import Footer from "../components/Footer";
import Header from "../components/Header";

import Contacto3 from "../assets/img/destacada3.webp";

const Contacto = () => {
  return (
    <>
      <Header />

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
                  <label htmlFor="nombre" className="uppercase font-bold">
                    E-Mail:
                  </label>

                  <input
                    type="text"
                    placeholder="Tu E-Mail"
                    className="border rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="uppercase font-bold">
                    Teléfono:
                  </label>

                  <input
                    type="text"
                    placeholder="Tu Telefono"
                    className="border rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="uppercase font-bold">
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
                  <label htmlFor="nombre" className="uppercase font-bold">
                    E-Mail:
                  </label>

                  <input
                    type="text"
                    placeholder="Tu E-Mail"
                    className="border rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="uppercase font-bold">
                    Teléfono:
                  </label>

                  <input
                    type="text"
                    placeholder="Tu Telefono"
                    className="border rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="uppercase font-bold">
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
                  <label htmlFor="nombre" className="uppercase font-bold">
                    E-Mail:
                  </label>

                  <input
                    type="text"
                    placeholder="Tu E-Mail"
                    className="border rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="uppercase font-bold">
                    E-Mail:
                  </label>

                  <input
                    type="text"
                    placeholder="Tu E-Mail"
                    className="border rounded-lg p-3"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;
