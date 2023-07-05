import LogoWC from "../assets/img/icono_wc.svg";
import LogoDormitorio from "../assets/img/icono_dormitorio.svg";
import LogoEstacionamiento from "../assets/img/icono_estacionamiento.svg";
import Anuncio1 from "../assets/img/anuncio1.webp";
import Anuncio2 from "../assets/img/anuncio2.webp";
import Anuncio3 from "../assets/img/anuncio3.webp";
import Anuncio4 from "../assets/img/anuncio4.webp";
import Anuncio5 from "../assets/img/anuncio5.webp";
import Anuncio6 from "../assets/img/anuncio6.webp";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Anuncios = () => {
  return (
    <>
      <Header />

      <main>
        <section className="w-[85%] mx-auto mb-10">
          <h1 className="text-4xl my-8 mx-5 md:mx-0 text-center">
            Casas y Depas en Venta
          </h1>
          <div className="grid md:grid-cols-3 mx-3 md:mx-0 gap-x-4 gap-y-10">
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

            <div className="flex flex-col gap-2 shadow-xl border">
              <img src={Anuncio4} alt="" />
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
              <img src={Anuncio5} alt="" />
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
              <img src={Anuncio6} alt="" />
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Anuncios;
