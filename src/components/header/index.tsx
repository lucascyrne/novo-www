import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

import logo from "../../assets/logo/logo.svg";
import location from "../../assets/icons/location.png";
import { useState } from "preact/hooks";

const Nothing = (): null => null;

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
  const [open, isOpen] = useState(false);

  const toggleShow = (): void => {
    isOpen(!open);
  };

  const hide = (): void => {
    isOpen(false);
  };

  const Links: FunctionalComponent = () => {
    return (
      <div id={style.black_layer} onClick={toggleShow}>
        <div id={style.burger_menu_pane} class={style.slide_left}>
          <div id={style.burger_menu_links}>
            <nav>
              <Link
                activeClassName={style.active}
                onClick={hide}
                href="/quem-somos"
              >
                Quem somos
              </Link>
              <Link
                activeClassName={style.active}
                onClick={hide}
                href="/nossas-lojas"
              >
                Nossas lojas
              </Link>
              <Link
                activeClassName={style.active}
                onClick={hide}
                href="/ofertas"
              >
                Ofertas
              </Link>
              <Link
                activeClassName={style.active}
                onClick={hide}
                href="/cartao-novo"
              >
                Cartão Novo
              </Link>
              <Link
                activeClassName={style.active}
                onClick={hide}
                href="/contato"
              >
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id={style.burger_menu}>
      <div id={style.burger_menu_span} onClick={toggleShow} onBlur={hide}>
        <span />
        <span />
        <span />
      </div>
      {open ? <Links /> : <Nothing />}
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
