import Footer from "../components/Footer";

import Blog3 from "../assets/img/blog3.webp";
import LogoSecurity from "../assets/img/icono1.svg";
import LogoMoney from "../assets/img/icono2.svg";
import LogoTime from "../assets/img/icono3.svg";

const Nosotros = () => {
  return (
    <>
      <main>
        <section className="w-[85%] mx-auto mb-10">
          <h1 className="text-4xl my-8 mx-5 md:mx-0 text-center">
            Conoce sobre Nosotros
          </h1>

          <div className="flex flex-col md:flex-row gap-5 items-center">
            <img src={Blog3} alt="Blog 3" />

            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-2xl">25 años de Experiencia</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis minima nihil nostrum sequi minus numquam quidem vitae
                amet nobis. Ratione omnis nihil labore doloribus laudantium
                distinctio rem ab quod architecto! Ab id labore aliquam at unde
                exercitationem nihil obcaecati non, ea quisquam aspernatur.
                Vitae veritatis quia commodi excepturi quasi aut, nam dolorum
                modi ratione praesentium cupiditate velit sit assumenda suscipit
                at ullam recusandae repellat deleniti, itaque officia est
                delectus. Veniam voluptatem ab enim quas deleniti, quis
                accusantium minima a. Nam architecto, quam suscipit fugiat eum
                placeat, libero quis incidunt, autem porro id veritatis cumque
                repellat perferendis quo impedit amet? Fugiat delectus rerum
                maxime, dolore consequatur pariatur omnis aliquam nihil fuga
                voluptatibus eligendi non vero dolor ab autem ad distinctio hic
                recusandae nesciunt provident ea. Amet, tempora eius, doloremque
                molestias minima doloribus consequuntur quo dolore corporis
                ratione quas exercitationem obcaecati quisquam praesentium,
                veritatis consequatur ex perspiciatis dicta animi error officia
                sequi.
              </p>
            </div>
          </div>
        </section>

        <section className="w-[85%] mx-auto mb-10">
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
      </main>

      <Footer />
    </>
  );
};

export default Nosotros;
