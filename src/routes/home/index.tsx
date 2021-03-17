import { FunctionalComponent, h } from "preact";

import { cookieInit } from "../../components/cookies/";
import { HomeCarousel } from "../../components/carousel/";

import style from "./style.css";

import teste1 from "../../assets/img/teste1.jpg";
import teste2 from "../../assets/img/teste2.jpg";

const isWeb = (): boolean => {
  if (typeof window !== "undefined")
    if (window.innerHeight > window.innerWidth) return false;
  return true;
};

const WebFiquePorDentro: FunctionalComponent = () => {
  return (
    <div id={style.fique_body}>
      <div class={style.news_card}>
        <img src={teste1} alt="" />
        <h2>Example of title not to big that's gonna be read!</h2>
        <a href="">
          Continue lendo<span>{">"}</span>
        </a>
      </div>
      <div class={style.news_card}>
        <img src={teste1} alt="" />
        <h2>Example of title not to big that's gonna be read!</h2>
        <a href="">
          Continue lendo<span>{">"}</span>
        </a>
      </div>
      <div class={style.news_card}>
        <img src={teste1} alt="" />
        <h2>Example of title not to big that's gonna be read!</h2>
        <a href="">
          Continue lendo<span>{">"}</span>
        </a>
      </div>
    </div>
  );
};

const WebCardTitle = (): h.JSX.Element => {
  return (
    <h1>
      Um jeito novo
      <br /> de pagar as suas compras, com
      <br /> mais comodidade.
    </h1>
  );
};

const MobileCardTitle = (): h.JSX.Element => {
  return <h1>Um jeito novo de pagar as suas compras, com mais comodidade.</h1>;
};

const Home: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.home}>
      <div id={style.banner}>
        <div class={style.img}>
          <img src={teste1} alt="Teste 1" />
        </div>
        <div class={style.info}>
          <div>
            <h1>Example Of Title To Be Read</h1>
            <p>
              Example of not too big paragraph to be read. Example of not too
              big paragraph to be read
            </p>
            <a class={style.button}>Saiba mais</a>
          </div>
        </div>
      </div>
      <div id={style.ofertas}>
        <h1>Ofertas</h1>
        <img src={teste2} alt="Teste 2" />
      </div>
      <div id={style.fique_por_dentro}>
        <h1>Fique por dentro</h1>
        {isWeb() ? <WebFiquePorDentro /> : <HomeCarousel />}
      </div>
      <div id={style.cartao}>
        <div>
          {isWeb() ? <WebCardTitle /> : <MobileCardTitle />}
          <a class={style.button}>Saiba mais</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
