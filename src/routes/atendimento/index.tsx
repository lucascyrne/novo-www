import { FunctionalComponent, h } from "preact";

import style from "./style";

import location from "../../assets/icons/location_red.jpg";
import wppred from "../../assets/icons/whatsapp_red.png";
import wppblue from "../../assets/icons/whatsapp_blue.jpg";
import { cookieInit } from "../../components/cookies";

const Atendimento: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.atendimento}>
      <h1>Atendimento Novo</h1>
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
      <div id={style.newsletter}>
        <h1>
          Cadastre e receba
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
