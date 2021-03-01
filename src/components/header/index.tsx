import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header: FunctionalComponent = () => {
  return (
    <header id={style.header}>
      <div id={style.logo}>
        <a href="/">
          <img src="" alt="" />
        </a>
      </div>
      <div id={style.menu}>
        <nav>
          <Link activeClassName={style.active} href="/quem-somos">
            Quem somos
          </Link>
          <Link activeClassName={style.active} href="/nossas-lojas">
            Nossas Lojas
          </Link>
          <Link activeClassName={style.active} href="/ofertas">
            Ofertas
          </Link>
          <Link activeClassName={style.active} href="/cartao-novo">
            Cartão Novo
          </Link>
          <Link activeClassName={style.active} href="/contato">
            Contato
          </Link>
        </nav>
      </div>
      <div id={style.location}>
        <img src="" alt="" />
        <p>Você está proximo a nossa loja do...</p>
      </div>
    </header>
  );
};

export default Header;
