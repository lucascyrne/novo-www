import { FunctionalComponent, h } from "preact";

import style from "./style";

import teste1 from "../../assets/img/teste1.jpg";
import fbIcon from "../../assets/icons/facebook_gray.png";
import wppIcon from "../../assets/icons/whatsapp_gray.png";
import ttIcon from "../../assets/icons/twitter_gray.png";
import emailIcon from "../../assets/icons/email_gray.png";
import { cookieInit } from "../../components/cookies";

const Noticias: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.noticias}>
      <h1>Fique por dentro</h1>
      <div class={style.news_body}>
        <img class={style.news_img} src={teste1} alt="" />
        <div class={style.social}>
          Compartilhe:
          <a href="">
            <img src={fbIcon} alt="" />
          </a>
          <a href="">
            <img src={wppIcon} alt="" />
          </a>
          <a href="">
            <img src={ttIcon} alt="" />
          </a>
          <a href="">
            <img src={emailIcon} alt="" />
          </a>
        </div>
        <div class={style.news_info}>
          <p>Quarta-feira, 10 de dezembro de 2020</p>
          <h2>Chegamos, Recife!</h2>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>
        </div>
        <a class={style.news_btn} href="">
          Veja mais
          <span>{">"}</span>
        </a>
      </div>
      <div id={style.pagination}>
        <ul>
          <li>
            <a href="">Anterior</a>
          </li>
          <li>
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">4</a>
          </li>
          <li>
            <a href="">5</a>
          </li>
          <li>
            <a href="">Próxima</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Noticias;
