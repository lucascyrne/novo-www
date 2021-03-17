import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";

import logo from "../../assets/logo/logo.svg";
import pulltechLogo from "../../assets/logo/Pulltech.png";
import payment from "../../assets/img/formapagamento.png";
import fbIcon from "../../assets/icons/facebook_white.png";
import ytIcon from "../../assets/icons/youtube_white.png";
import igIcon from "../../assets/icons/instagram_white.png";

import style from "./style.css";

const isWeb = (): boolean => {
  if (window.innerHeight < window.innerWidth) return true;
  false;
};

const WebFooter: FunctionalComponent = () => {
  return (
    <footer id={style.footer}>
      <div class={style.row}>
        <a id={style.logo}>
          <img src={logo} alt="" />
        </a>
        <div id={style.footer_nav}>
          <div class={style.col}>
            <h3>Somos novo</h3>
            <Link href="/ofertas">Ofertas</Link>
            <Link href="/cartao-novo">Novocard</Link>
            <Link href="/cadastro">Meu cadastro</Link>
          </div>
          <div class={style.col}>
            <h3>Institucional</h3>
            <Link href="/quem-somos">Quem somos</Link>
            <Link href="/nossas-lojas">Nossas lojas</Link>
            <Link href="/noticias">Noticias</Link>
          </div>
          <div class={style.col}>
            <h3>Fale Conosco</h3>
            <Link href="/contato">Contato</Link>
            <Link href="/cadastro">Trabalhe conosco</Link>
            <Link href="/atendimento">Televendas atacado</Link>
          </div>
        </div>
        <div id={style.pagamento} class={style.col}>
          <div id={style.newsletter}>
            <h4>
              Receba nossas
              <br /> ofertas por email
            </h4>
            <a class={style.button}>Quero receber</a>
          </div>
          <div id={style.formas_pagamento}>
            <h4>Formas de pagamento</h4>
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
      <div id={style.social}>
        <div id={style.social_icons}>
          <h4>Siga nossas redes sociais</h4>
          <a href="/">
            <img src={fbIcon} alt="" />
          </a>
          <a href="/">
            <img src={igIcon} alt="" />
          </a>
          <a href="/">
            <img src={ytIcon} alt="" />
          </a>
        </div>
      </div>
      <div id={style.copyright}>
        <h4>Novo Atacarejo | Todos os direitos reservados</h4>
        <img src={pulltechLogo} alt="" />
      </div>
    </footer>
  );
};

const MobileFooter: FunctionalComponent = () => {
  return (
    <footer id={style.footer}>
      <div id={style.newsletter}>
        <h4>Receba nossas ofertas por email</h4>
        <a class={style.button}>Quero Receber</a>
      </div>
      <div id={style.footer_nav}>
        <div class={style.col}>
          <h3>Somos novo</h3>
          <Link href="/ofertas">Ofertas</Link>
          <Link href="/cartao-novo">Novocard</Link>
          <Link href="/cadastro">Meu cadastro</Link>
        </div>
        <div class={style.col}>
          <h3>Institucional</h3>
          <Link href="/quem-somos">Quem somos</Link>
          <Link href="/nossas-lojas">Nossas lojas</Link>
          <Link href="/noticias">Noticias</Link>
        </div>
        <div class={style.col}>
          <h3>Fale Conosco</h3>
          <Link href="/contato">Contato</Link>
          <Link href="/cadastro">Trabalhe conosco</Link>
          <Link href="/atendimento">Televendas atacado</Link>
        </div>
      </div>
      <div id={style.formas_pagamento}>
        <h4>Formas de pagamento</h4>
        <img src={payment} alt="" />
      </div>
      <div id={style.social}>
        <div id={style.social_icons}>
          <h4>Siga nossas redes sociais</h4>
          <a href="/">
            <img src={fbIcon} alt="" />
          </a>
          <a href="/">
            <img src={igIcon} alt="" />
          </a>
          <a href="/">
            <img src={ytIcon} alt="" />
          </a>
        </div>
      </div>
      <div id={style.copyright}>
        <h4>Novo Atacarejo | Todos os direitos reservados</h4>
        <img src={pulltechLogo} alt="" />
      </div>
    </footer>
  );
};

const Footer: FunctionalComponent = () => {
  if (isWeb()) return <WebFooter />;
  return <MobileFooter />;
};

export default Footer;
