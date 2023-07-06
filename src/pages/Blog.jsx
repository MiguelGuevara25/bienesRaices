import Footer from "../components/Footer";

import Blog1 from "../assets/img/blog1.webp";
import Blog2 from "../assets/img/blog2.webp";
import Blog3 from "../assets/img/blog3.webp";
import Blog4 from "../assets/img/blog4.webp";

const Blog = () => {
  return (
    <>
      <main>
        <section className="w-[85%] mx-auto mb-10">
          <h1 className="text-4xl my-8 mx-5 md:mx-0 text-center">
            Nuestro Blog
          </h1>

          <div className="flex flex-col md:w-[60%] w-full mx-auto gap-20 md:gap-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <img src={Blog1} width={250} alt="" />

              <div className="flex flex-col gap-5 text-lg">
                <h3 className="font-bold text-2xl">
                  Terraza en el techo de tu casa
                </h3>

                <p>
                  Escrito el:{" "}
                  <span className="text-orange-500">20/10/2023</span> por:{" "}
                  <span className="text-orange-500">Admin</span>{" "}
                </p>
                <p>
                  Consejos para construir una terraza en el techo de tu casa con
                  los mejores materiales y ahorrando dinero
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <img src={Blog2} width={250} alt="" />

              <div className="flex flex-col gap-5 text-lg">
                <h3 className="font-bold text-2xl">
                  Terraza en el techo de tu casa
                </h3>

                <p>
                  Escrito el:{" "}
                  <span className="text-orange-500">20/10/2023</span> por:{" "}
                  <span className="text-orange-500">Admin</span>{" "}
                </p>
                <p>
                  Consejos para construir una terraza en el techo de tu casa con
                  los mejores materiales y ahorrando dinero
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <img src={Blog3} width={250} alt="" />

              <div className="flex flex-col gap-5 text-lg">
                <h3 className="font-bold text-2xl">
                  Terraza en el techo de tu casa
                </h3>

                <p>
                  Escrito el:{" "}
                  <span className="text-orange-500">20/10/2023</span> por:{" "}
                  <span className="text-orange-500">Admin</span>{" "}
                </p>
                <p>
                  Consejos para construir una terraza en el techo de tu casa con
                  los mejores materiales y ahorrando dinero
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <img src={Blog4} width={250} alt="" />

              <div className="flex flex-col gap-5 text-lg">
                <h3 className="font-bold text-2xl">
                  Terraza en el techo de tu casa
                </h3>

                <p>
                  Escrito el:{" "}
                  <span className="text-orange-500">20/10/2023</span> por:{" "}
                  <span className="text-orange-500">Admin</span>{" "}
                </p>
                <p>
                  Consejos para construir una terraza en el techo de tu casa con
                  los mejores materiales y ahorrando dinero
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
