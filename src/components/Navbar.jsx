import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/" ? "portada" : "bg-zinc-800"}`}
      >
        <nav className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center w-[85%] mx-auto py-5">
          <div className="w-80">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 items-center text-white text-lg">
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/anuncios">Anuncios</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </nav>
      </div>

      <Outlet />

      <footer>
        HOLAsdasmkdamkodmoakskodamskocmkoaskkmasmalorem Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Quae ducimus temporibus, aperiam ea,
        cum, ab quam doloremque amet veniam quos perferendis? Tempore, ipsa
        porro sunt aliquid vitae perspiciatis. Molestiae assumenda enim
        voluptatem, cum dolorem fugiat culpa minima voluptates inventore aut
        fuga magnam asperiores eligendi amet ipsum aliquam nulla eaque? Neque
        quis, animi officiis dicta optio temporibus cupiditate hic expedita
        molestias debitis deserunt error asperiores laborum voluptatem vel
        dolores tempore unde accusantium corrupti labore adipisci iure doloribus
        cumque voluptates. Quia, illo? Numquam fuga sequi deserunt ut nemo. Qui
        doloribus laboriosam repellat odit dolorum fuga tempora laudantium ullam
        corporis reprehenderit dolores unde tenetur eos assumenda expedita
        soluta quam culpa iure veritatis magni sint, perspiciatis mollitia.
        Reiciendis exercitationem ipsam animi blanditiis consequuntur at, rem
        nulla amet nisi fuga sed, provident laudantium excepturi iure voluptates
        eaque rerum tempora dignissimos distinctio esse error omnis! Quasi
        debitis delectus dolor illo nobis soluta. Provident, perspiciatis atque
        sequi illo omnis sint alias qui beatae ducimus repudiandae animi,
        minima, tenetur dignissimos eius optio dolor iure! Omnis sint ducimus
        provident cupiditate molestiae tenetur, sunt veniam necessitatibus.
        Facilis animi provident atque exercitationem odit reiciendis, facere nam
        nesciunt labore, incidunt dignissimos laboriosam similique at sit, iusto
        cum pariatur est! Ratione delectus, officia modi dolore a porro
        dignissimos quisquam eligendi voluptates quaerat ea? Odit ut impedit
        dolores quaerat nulla sit amet, alias adipisci eum ratione sapiente eos
        fugit natus modi vero dicta totam voluptatum explicabo dolor voluptate
        atque iure aliquid libero? Unde laborum odit aliquam rem, ipsa
        necessitatibus aut qui, nemo delectus incidunt at, expedita neque quis
        id? Nostrum itaque eveniet molestias magni laboriosam rerum consectetur
        culpa ratione, officiis sed harum! Dolores beatae id aliquid, esse
        quaerat nemo at. Enim in, asperiores dicta aliquam inventore tempore
        necessitatibus quod debitis itaque consectetur molestiae ratione
        consequatur iste est, ipsam voluptate sequi dignissimos illum hic veniam
        adipisci nam. Nostrum voluptatem obcaecati dignissimos earum neque, sint
        nobis vel vitae. Magni quo fugit praesentium distinctio laborum maiores
        repudiandae porro, facere totam dolore possimus. Laborum ad excepturi
        minima inventore tenetur, delectus placeat molestias doloribus, illo
        exercitationem fugit voluptatem unde. Laborum mollitia sint eaque
        deleniti sit sapiente quibusdam obcaecati voluptate, asperiores corrupti
        iusto a rerum facere sequi pariatur dolorum quia enim expedita? Nihil
        repellat deleniti, quo nostrum dicta atque aperiam quam mollitia nam
        optio aut sint nisi neque consequuntur cupiditate impedit reprehenderit
        quasi quisquam itaque facere earum repellendus quaerat obcaecati labore!
        Ipsa, dolore aliquam quisquam nam non nobis assumenda ex exercitationem
        repellat, nesciunt fuga facere, blanditiis voluptatem minus soluta
        possimus eligendi quis? Cum numquam alias dolorem doloremque aliquid
        nisi voluptatibus quis voluptas similique, repellendus expedita eveniet
        pariatur dolor saepe laboriosam harum, beatae exercitationem quibusdam
        perspiciatis at. Illum fugit rem minima commodi odit laborum iure at
        velit veniam sed vitae repellendus, nemo asperiores nam dicta tempora
        natus blanditiis delectus repellat dignissimos numquam explicabo. Rerum
        veritatis eum quas necessitatibus delectus modi assumenda praesentium
        accusamus, quia at enim corporis velit aliquid. Voluptas esse dolore
        repellendus nulla obcaecati exercitationem velit numquam tempora, ex,
        neque harum sit nihil incidunt fuga nesciunt in laboriosam, ad ipsa
        quos? Laboriosam qui tempore ducimus molestias corrupti mollitia,
        consequatur exercitationem consectetur ad quod fugit ab non nesciunt
        incidunt nobis temporibus. Iure sapiente mollitia ipsam adipisci
        repudiandae officia iusto sit debitis, odio nesciunt in ducimus
        consectetur dicta quam alias illo. Necessitatibus sint explicabo eaque
        dicta soluta deleniti deserunt nemo magni, dolore cum, ipsum voluptatem.
        Ducimus dolor laudantium reprehenderit fugiat placeat ea, inventore eos
        expedita, dicta animi error. Fugiat autem labore laboriosam ex, quis
        tempora minima unde aliquam explicabo perspiciatis, officiis illum
        placeat. Aliquam placeat inventore rem, doloremque sequi ipsam sit hic
        vero excepturi rerum quaerat eaque atque, in corporis. Est quasi beatae
        alias fuga cumque unde minus, dignissimos maxime adipisci, aperiam amet
        sunt dolorum nisi quaerat. Corporis similique, nihil velit quisquam
        fugit earum quasi officiis rem natus minus accusantium explicabo quis
        illo dolorem nobis nostrum ut inventore illum! At adipisci hic eaque
        nemo officia atque accusamus deserunt libero, eligendi veritatis ut
        laboriosam iure molestias minima quibusdam? Id laudantium eum magnam
        excepturi tempore? Culpa quasi quisquam, vel saepe, porro iure id
        corrupti officia veniam consectetur natus, similique ducimus placeat.
        Sit vero perspiciatis incidunt sed, ab qui maiores. Ad similique eius
        qui animi expedita cupiditate, nobis quod voluptas itaque fugiat,
        nostrum hic architecto ipsam exercitationem eaque sequi consectetur amet
        quaerat provident. Quidem, eligendi, fugiat ab assumenda quas laborum
        maxime maiores at quasi excepturi repudiandae. Dolore consequatur
        voluptates tempora voluptatibus error quas molestias ipsum distinctio
        fugiat culpa, et dignissimos impedit quasi. Officiis alias consequuntur
        perferendis mollitia dignissimos iure necessitatibus totam quisquam est
        nostrum facilis hic, voluptatem ipsum et dolore molestiae laudantium
        maxime, deleniti fugit ducimus odio possimus. Culpa placeat harum
        quisquam. Obcaecati maiores iusto inventore, culpa expedita placeat
        libero, sapiente ipsum tenetur magni quis reiciendis! Quas odio magni,
        reiciendis, ratione minus, id officiis quasi aliquid vitae sed repellat
        adipisci dicta tempora maxime animi recusandae debitis expedita velit
        alias natus tenetur blanditiis. Recusandae dolorem dolorum quidem
        voluptate delectus, harum, expedita at illo, a repellat sunt dolor!
        Saepe, atque dicta! Optio nisi perferendis tenetur aliquid repellendus,
        debitis doloremque, quibusdam rerum recusandae maiores necessitatibus,
        adipisci quia maxime accusamus incidunt accusantium itaque fugiat
        sapiente amet architecto excepturi? Dolores et impedit saepe aspernatur
        delectus libero enim quidem deleniti ratione laboriosam minima
        distinctio iure, voluptas praesentium ea illum accusamus obcaecati
        numquam, harum molestiae tempora? Labore praesentium dicta quo neque
        officiis. Illo animi sapiente omnis, modi illum corporis delectus.
        Facilis nobis aliquid rem ab tempora libero quod blanditiis itaque enim!
        Tempora dolores perferendis harum facere quo quidem ad aut earum
        repellat, illum tempore, quas nemo. Nulla quisquam maxime similique
        ducimus libero. Praesentium temporibus quos ipsa ducimus, quae
        dignissimos excepturi deleniti accusantium fugiat error exercitationem
        adipisci placeat ad veniam, est doloremque nemo inventore, ab molestiae
        sit similique consequatur voluptatem odio? Dignissimos, fugiat iste qui
        sapiente quas eligendi odit unde reiciendis voluptates ad quae hic
        libero dicta quis optio et cumque. Tenetur ut cum placeat? Magnam
        laboriosam eos corporis quae, labore ab iste atque odit placeat officia
        aliquid. Quod sunt, id modi dolorum expedita atque cumque officiis
        maiores harum porro illum architecto commodi!
      </footer>
    </>
  );
};

export default Navbar;
