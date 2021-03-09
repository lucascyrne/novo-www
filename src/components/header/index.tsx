import { FunctionalComponent, h, render } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

import logo from "../../assets/logo/logo.svg";
import location from "../../assets/icons/location.png";

const isWeb = (): boolean => {
  if (window.innerHeight < window.innerWidth) return true;
  return false;
};

const Menu: FunctionalComponent = () => {
  return (
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
  );
};

const BurgerMenu: FunctionalComponent = () => {
  return (
    <div id={style.burger_menu}>
      <div id={style.burger_menu_span}>
        <span />
        <span />
        <span />
      </div>
      <div id={style.black_layer}>
        <div id={style.burger_menu_links}>
          <ul>
            <li>Quem somos</li>
            <li>Nossas lojas</li>
            <li>Ofertas</li>
            <li>Cartão Novo</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Header: FunctionalComponent = () => {
  const orientation = isWeb();

  return (
    <header id={style.header}>
      <div id={style.logo}>
        <a href="/">
          <img src={logo} alt="Novo Atacarejo Logo" />
        </a>
      </div>
      {orientation ? <Menu /> : <BurgerMenu />}
      <div id={style.location}>
        <div>
          <img src={location} alt="Location icon" />
          <p>
            Você está proximo a nossa loja do{" "}
            <span id={style.bold}>Recife - PE</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
