import { FunctionalComponent, h } from "preact";

import style from "./style";

import location from "../../assets/icons/location_red.jpg";
import wppred from "../../assets/icons/whatsapp_red.png";
import wppblue from "../../assets/icons/whatsapp_blue.jpg";

import { cookieInit } from "../../components/cookies";
import { AtendimentoCarousel } from "../../components/carousel";

const Nothing = (): null => null;

const isWeb = (): boolean => {
  if (window.innerHeight < window.innerWidth) return true;
  return false;
};

const MobileSubtitle = (): h.JSX.Element => {
  return (
    <div>
      <h2>Televendas por Whatsapp</h2>
      <p>
        Escolha a loja mais próximo de você para receber as ofertas por
        WhatsApp.
      </p>
    </div>
  );
};

const WebCards = (): h.JSX.Element => {
  return (
    <div id={style.card_container}>
      <div class={style.card}>
        <h2>Arcoverde - PE</h2>
        <div class={style.location}>
          <img src={location} alt="" />
          <p>BR-232, KM 258, ao lado do Batalhão da Polícia Militar</p>
        </div>
        <div class={style.personal}>
          <h3>Ofertas para compras pessoais</h3>
          <div>
            <img src={wppred} alt="" />
            <p>(81) 98252-8942</p>
            <a href="" class={style.card_button}>
              Receber ofertas Varejo
            </a>
          </div>
        </div>
        <div class={style.shopping}>
          <h3>Ofertas para compras para Atacado</h3>
          <div>
            <img src={wppblue} alt="" />
            <p>(81) 98252-8942</p>
            <a href="" class={style.card_button} id={style.blue}>
              Atendimento Atacado
            </a>
          </div>
        </div>
      </div>
      <div class={style.card}>
        <h2>Arcoverde - PE</h2>
        <div class={style.location}>
          <img src={location} alt="" />
          <p>BR-232, KM 258, ao lado do Batalhão da Polícia Militar</p>
        </div>
        <div class={style.personal}>
          <h3>Ofertas para compras pessoais</h3>
          <div>
            <img src={wppred} alt="" />
            <p>(81) 98252-8942</p>
            <a href="" class={style.card_button}>
              Receber ofertas Varejo
            </a>
          </div>
        </div>
        <div class={style.shopping}>
          <h3>Ofertas para compras para Atacada</h3>
          <div>
            <img src={wppblue} alt="" />
            <p>(81) 98252-8942</p>
            <a href="" class={style.card_button} id={style.blue}>
              Atendimento Atacado
            </a>
          </div>
        </div>
      </div>
      <div class={style.card}>
        <h2>Arcoverde - PE</h2>
        <div class={style.location}>
          <img src={location} alt="" />
          <p>BR-232, KM 258, ao lado do Batalhão da Polícia Militar</p>
        </div>
        <div class={style.personal}>
          <h3>Ofertas para compras pessoais</h3>
          <div>
            <img src={wppred} alt="" />
            <p>(81) 98252-8942</p>
            <a href="" class={style.card_button}>
              Receber ofertas Varejo
            </a>
          </div>
        </div>
        <div class={style.shopping}>
          <h3>Ofertas para compras para Atacada</h3>
          <div>
            <img src={wppblue} alt="" />
            <p>(81) 98252-8942</p>
            <a href="" class={style.card_button} id={style.blue}>
              Atendimento Atacado
            </a>
          </div>
        </div>
      </div>
      <div class={style.card}>
        <h2>Arcoverde - PE</h2>
        <div class={style.location}>
          <img src={location} alt="" />
          <p>BR-232, KM 258, ao lado do Batalhão da Polícia Militar</p>
        </div>
        <div class={style.personal}>
          <h3>Ofertas para compras pessoais</h3>
          <div>
            <img src={wppred} alt="" />
            <p>(81) 98252-8942</p>
            <a href="" class={style.card_button}>
              Receber ofertas Varejo
            </a>
          </div>
        </div>
        <div class={style.shopping}>
          <h3>Ofertas para compras para Atacada</h3>
          <div>
            <img src={wppblue} alt="" />
            <p>(81) 98252-8942</p>
            <a href="" class={style.card_button} id={style.blue}>
              Atendimento Atacado
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Atendimento: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.atendimento}>
      <h1>Atendimento Novo</h1>
      {isWeb() ? <Nothing /> : <MobileSubtitle />}
      {isWeb() ? <WebCards /> : <AtendimentoCarousel />}
      <div id={style.newsletter}>
        <h1>
          Cadastre-se e receba
          <br />
          nossas ofertas por e-mail
        </h1>
        <p>
          Digite seu email e receba ofertas para compras pessoais ou em atacado.
        </p>
        <div class={style.row}>
          <input type="text" placeholder="Digite seu email" />
          <label htmlFor="news-btn">
            {">"}
            <button type="submit" id="news-btn" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Atendimento;
