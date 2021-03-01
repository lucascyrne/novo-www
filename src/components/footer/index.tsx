import { FunctionComponent, h } from "preact";
import { Link } from "preact-router";
import style from "./style";

const Footer: FunctionComponent = () => {
  return (
    <footer id={style.footer}>
      <div class={style.row}>
        <a id={style.logo}>
          <img src="" alt="" />
        </a>
        <div id={style.footer_nav}>
          <div class={style.col}>
            <h3>Somos novo</h3>
            <Link href="/">Ofertas</Link>
            <Link href="/">Novocard</Link>
            <Link href="/">Meu cadastro</Link>
          </div>
          <div class={style.col}>
            <h3>Institucional</h3>
            <Link href="/">Quem somos</Link>
            <Link href="/">Nossas lojas</Link>
            <Link href="/">Noticias</Link>
          </div>
          <div class={style.col}>
            <h3>Fale Conosco</h3>
            <Link href="/">Contato</Link>
            <Link href="/">Trabalhe conosco</Link>
            <Link href="/">Televendas para atacado</Link>
          </div>
        </div>
        <div id={style.pagamento} class={style.col}>
          <div id={style.newsletter}>
            <h4>
              Receba nossas
              <br /> ofertas por email
            </h4>
            <a class={style.button}>Quero Receber</a>
          </div>
          <div id={style.formas_pagamento}>
            <h4>Formas de pagamento</h4>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div id={style.social}>
        <div>
          <h4>Siga nossas redes sociais</h4>
          <a href="/">
            <img src="/" alt="" />
          </a>
          <a href="/">
            <img src="/" alt="" />
          </a>
          <a href="/">
            <img src="/" alt="" />
          </a>
        </div>
      </div>
      <div id={style.copyright}>
        <h4>Novo Atacarejo | Todos os direitos reservados</h4>
        <img src="/" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
