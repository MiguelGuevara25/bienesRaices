import Navbar from "../components/Navbar";
import LogoSecurity from "../assets/img/icono1.svg";
import LogoMoney from "../assets/img/icono2.svg";
import LogoTime from "../assets/img/icono3.svg";
import LogoWC from "../assets/img/icono_wc.svg";
import LogoDormitorio from "../assets/img/icono_dormitorio.svg";
import LogoEstacionamiento from "../assets/img/icono_estacionamiento.svg";
import Anuncio1 from "../assets/img/anuncio1.webp";
import Anuncio2 from "../assets/img/anuncio2.webp";
import Anuncio3 from "../assets/img/anuncio3.webp";
import Comillas from "../assets/img/comilla.svg";

const Inicio = () => {
  return (
    <>
      <header className="portada">
        <Navbar />
      </header>

      <main>
        <section className="container mx-auto">
          <h2 className="text-center text-4xl my-7">Más Sobre Nosotros</h2>
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

        <section className="container mx-auto">
          <h2 className="text-center text-4xl my-7">Casas y Depas en Venta</h2>
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
              className="text-white font-bold bg-lime-500 py-3 px-7"
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

        <section className="container mx-auto">
          <div className="flex justify-around my-5">
            <div>
              <h3 className="text-2xl">Nuestro Blog</h3>
            </div>
            <div>
              <h3 className="text-2xl">Testimoniales</h3>
              <div className="bg-lime-500 text-white grid grid-cols-2">
                <img
                  src={Comillas}
                  alt="comillas"
                  className=" border border-red-500"
                />
                <p className="text-2xl border border-red-500">
                  El personal se comportó de una excelente forma, muy buena
                  atención y la casa que me ofrecieron cumple con todas mis
                  expectativas.
                </p>
                <p className="text-end text-xl border border-red-500">
                  -Nicole Mejia
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Inicio;
