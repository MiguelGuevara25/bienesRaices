import Footer from "../components/Footer";
import Header from "../components/Header";

import LogoSecurity from "../assets/img/icono1.svg";
import LogoMoney from "../assets/img/icono2.svg";
import LogoTime from "../assets/img/icono3.svg";
import LogoWC from "../assets/img/icono_wc.svg";
import LogoDormitorio from "../assets/img/icono_dormitorio.svg";
import LogoEstacionamiento from "../assets/img/icono_estacionamiento.svg";
import Anuncio1 from "../assets/img/anuncio1.webp";
import Anuncio2 from "../assets/img/anuncio2.webp";
import Anuncio3 from "../assets/img/anuncio3.webp";

const Inicio = () => {
  return (
    <>
      <Header />

      <main>
        <section className="w-[85%] mx-auto">
          <h2 className="text-4xl my-8 mx-5 md:mx-0 text-center">
            Más Sobre Nosotros
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col items-center gap-7">
              <img src={LogoSecurity} alt="" className="h-24" />
              <h3 className="uppercase text-2xl">Seguridad</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                eveniet in. Est laudantium modi reiciendis aperiam iusto ullam
                voluptatibus vel harum aspernatur?
              </p>
            </div>

            <div className="flex flex-col items-center gap-7">
              <img src={LogoMoney} alt="" className="h-24" />
              <h3 className="uppercase text-2xl">Precio</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                eveniet in. Est laudantium modi reiciendis aperiam iusto ullam
                voluptatibus vel harum aspernatur?
              </p>
            </div>

            <div className="flex flex-col items-center gap-7">
              <img src={LogoTime} alt="" className="h-24" />
              <h3 className="uppercase text-2xl">A Tiempo</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                eveniet in. Est laudantium modi reiciendis aperiam iusto ullam
                voluptatibus vel harum aspernatur?
              </p>
            </div>
          </div>
        </section>

        <section className="w-[85%] mx-auto">
          <h2 className="text-4xl my-8 mx-5 md:mx-0 text-center">
            Casas y Depas en Venta
          </h2>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-2 shadow-xl border">
              <img src={Anuncio1} alt="" />
              <div className="flex flex-col gap-3 m-4">
                <h3 className="text-center text-2xl">
                  Casa de Lujo en el Lago
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione ut illum aperiam deserunt alias.
                </p>
                <p className="text-3xl text-lime-500 font-semibold">
                  $3,000,000
                </p>
                <div className="flex justify-around">
                  <div className="flex items-center gap-2">
                    <img src={LogoWC} alt="" />
                    <p>3</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={LogoDormitorio} alt="" />
                    <p>3</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={LogoEstacionamiento} alt="" />
                    <p>4</p>
                  </div>
                </div>

                <input
                  type="button"
                  value="Ver Propiedad"
                  className="text-center bg-orange-500 text-white font-bold py-3 mx-2 cursor-pointer hover:bg-orange-600 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 shadow-xl border">
              <img src={Anuncio2} alt="" />
              <div className="flex flex-col m-4 gap-3">
                <h3 className="text-center text-2xl">
                  Casa terminados de lujo
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione ut illum aperiam deserunt alias.
                </p>
                <p className="text-3xl text-lime-500 font-semibold">
                  $3,000,000
                </p>
                <div className="flex justify-around">
                  <div className="flex items-center gap-2">
                    <img src={LogoWC} alt="" />
                    <p>3</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={LogoDormitorio} alt="" />
                    <p>3</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={LogoEstacionamiento} alt="" />
                    <p>4</p>
                  </div>
                </div>

                <input
                  type="button"
                  value="Ver Propiedad"
                  className="text-center bg-orange-500 text-white font-bold py-3 mx-2 cursor-pointer hover:bg-orange-600 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 shadow-xl border">
              <img src={Anuncio3} alt="" />
              <div className="flex flex-col gap-3 m-4">
                <h3 className="text-center text-2xl ">Casa con Alberca</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione ut illum aperiam deserunt alias.
                </p>

                <p className="text-3xl text-lime-500 font-semibold">
                  $3,000,000
                </p>
                <div className="flex justify-around">
                  <div className="flex items-center gap-2">
                    <img src={LogoWC} alt="" />
                    <p>3</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={LogoDormitorio} alt="" />
                    <p>3</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={LogoEstacionamiento} alt="" />
                    <p>4</p>
                  </div>
                </div>

                <input
                  type="button"
                  value="Ver Propiedad"
                  className="text-center bg-orange-500 text-white font-bold py-3 mx-2 cursor-pointer hover:bg-orange-600 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end my-5">
            <input
              type="button"
              value="Ver Todas"
              className="text-white font-bold bg-lime-500 hover:bg-lime-600 transition-colors py-3 px-7 cursor-pointer"
            />
          </div>
        </section>

        <section className="portada2 text-white flex flex-col items-center justify-center gap-10">
          <h2 className="text-4xl font-bold">
            Encuentra la casa de tus sueños
          </h2>
          <div className="flex flex-col items-center gap-5">
            <p>
              Llena el formulario de contacto y un asesor se pondrá en contacto
              contigo a la brevedad
            </p>

            <input
              className="text-center w-max bg-orange-500 font-bold py-3 px-6 mx-2 cursor-pointer hover:bg-orange-600 transition-all"
              type="button"
              value="Contáctanos"
            />
          </div>
        </section>

        <section className="w-[85%] mx-auto">
          <div className="flex items-center flex-col md:flex-row justify-evenly my-5">
            <div className="flex flex-col gap-8 md:w-1/3 w-9/12">
              <h3 className="text-2xl">Nuestro Blog</h3>
              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-2xl">
                  Terraza en el techo de tu casa
                </h4>
                <div className="flex flex-col gap-5 text-lg">
                  <p>
                    Escrito el:{" "}
                    <span className="text-orange-500">20/10/2023</span> por:{" "}
                    <span className="text-orange-500">Admin</span>{" "}
                  </p>
                  <p>
                    Consejos para construir una terraza en el techo de tu casa
                    con los mejores materiales y ahorrando dinero
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-2xl">
                  Guía para la decoración de tu hogar
                </h4>
                <div className="flex flex-col gap-5 text-lg">
                  <p>
                    Escrito el:{" "}
                    <span className="text-orange-500">20/10/2023</span> por:{" "}
                    <span className="text-orange-500">Admin</span>{" "}
                  </p>
                  <p>
                    Máximiza el espacio de tu hogar con esta guía, aprende a
                    combinar muebles y colores para darle vida a tu espacio
                  </p>
                </div>
              </div>
            </div>

            <div className="w-2/6 flex flex-col items-center gap-8">
              <h3 className="text-2xl">Testimoniales</h3>
              <div className="bg-lime-500 text-white rounded-2xl p-5 testi">
                <p className="text-2xl w-48 mb-5">
                  El personal se comportó de una excelente forma, muy buena
                  atención y la casa que me ofrecieron cumple con todas mis
                  expectativas.
                </p>
                <p className="text-end text-xl font-bold">- Nicole Mejia</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Inicio;
