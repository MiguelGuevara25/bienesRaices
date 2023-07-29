const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen login__background">
      <form className="border rounded-lg p-10">
        <h3 className="text-center uppercase text-2xl font-bold text-orange-500 mb-5">
          Iniciar Sesión
        </h3>

        <div className="flex flex-col gap-5 text-white">
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="uppercase font-bold">
              Nombre:
            </label>

            <input
              type="text"
              placeholder="Tu Nombre"
              className="border-b-2 py-3 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="uppercase font-bold">
              E-Mail:
            </label>

            <input
              type="email"
              placeholder="Tu E-Mail"
              className="border-b-2 py-3 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <input
          type="button"
          value="Enviar"
          className="text-white w-full font-bold uppercase bg-lime-500 hover:bg-lime-600 transition-colors py-3 px-7 cursor-pointer mt-5"
        />
      </form>
    </section>
  );
};

export default Login;
