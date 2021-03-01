import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header id={style.header}>
            <a id={style.logo} href="/">
                <img src="" alt="" />
            </a>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/quem-somos">
                    Quem somos
                </Link>
                <Link activeClassName={style.active} href="/nossas-lojas">
                    Nossas Lojas
                </Link>
                <Link activeClassName={style.active} href="/ofertas">
                    Ofertas
                </Link>
                <Link activeClassName={style.active} href="/contato">
                    Contato
                </Link>
            </nav>
            <div id={style.location}>
                <img src="" alt="" />
                <p>Você está proximo a nossa loja do...</p>
            </div>
        </header>
    );
};

export default Header;
