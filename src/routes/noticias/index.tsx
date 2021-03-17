import { FunctionalComponent, h } from "preact";

import style from "./style.css";

import teste1 from "../../assets/img/teste1.jpg";
import { cookieInit } from "../../components/cookies";

const Noticias: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.noticias}>
      <h1>Fique por dentro</h1>
      <div class={style.news_body}>
        <img class={style.news_img} src={teste1} alt="" />
        <div class={style.news_info}>
          <p>Quarta-feira, 10 de dezembro de 2020</p>
          <h2>Chegamos, Recife!</h2>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...”
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
