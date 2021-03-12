import { h, FunctionalComponent } from "preact";
import { useRef, useState } from "preact/hooks";

import style from "./style";

import teste1 from "../../assets/img/teste1.jpg";
import location from "../../assets/icons/location_red.jpg";
import wppred from "../../assets/icons/whatsapp_red.png";
import wppblue from "../../assets/icons/whatsapp_blue.jpg";

const NavLinks = (): h.JSX.Element => {
  const [fstBar, isFstBar] = useState(false);
  const [sndBar, isSndBar] = useState(false);
  const [trdBar, isTrdBar] = useState(false);
  const fstLink = useRef(null),
    sndLink = useRef(null),
    trdLink = useRef(null);

  const handleClick = (e, index): void => {
    switch (index) {
      case 1:
        if (fstBar) break;
        isFstBar(true);
        fstLink.current.style.backgroundColor = "var(--red)";

        if (sndBar) {
          sndLink.current.style.backgroundColor = "rgba(204, 204, 204, 0.6)";
          isSndBar(false);
        } else if (trdBar) {
          isTrdBar(false);
          trdLink.current.style.backgroundColor = "rgba(204, 204, 204, 0.6)";
        }
        break;
      case 2:
        if (sndBar) break;
        isSndBar(true);
        sndLink.current.style.backgroundColor = "var(--red)";

        if (fstBar) {
          fstLink.current.style.backgroundColor = "rgba(204, 204, 204, 0.6)";
          isFstBar(false);
        } else if (trdBar) {
          trdLink.current.style.backgroundColor = "rgba(204, 204, 204, 0.6)";
          isTrdBar(false);
        }
        break;
      default:
        if (trdBar) break;
        isTrdBar(true);
        trdLink.current.style.backgroundColor = "var(--red)";

        if (sndBar) {
          sndLink.current.style.backgroundColor = "rgba(204, 204, 204, 0.6)";
          isSndBar(false);
        } else if (fstBar) {
          fstLink.current.style.backgroundColor = "rgba(204, 204, 204, 0.6)";
          isFstBar(false);
        }
        break;
    }
  };

  return (
    <nav class={style.selected}>
      <a href="#card1" onClick={(e): void => handleClick(e, 1)} ref={fstLink} />
      <a href="#card2" onClick={(e): void => handleClick(e, 2)} ref={sndLink} />
      <a href="#card3" onClick={(e): void => handleClick(e, 3)} ref={trdLink} />
    </nav>
  );
};

export const HomeCarousel: FunctionalComponent = () => {
  return (
    <div class={style.superContainer}>
      <div class={style.container}>
        <div class={style.items}>
          <div class={style.card} id="card1">
            <img src={teste1} alt="" />
            <div>
              <h2>Chegamos, Recife!</h2>
              <a href="">
                Continue lendo<span>{">"}</span>
              </a>
            </div>
          </div>
          <div class={style.card} id="card2">
            <img src={teste1} alt="" />
            <div>
              <h2>Chegamos, Recife!</h2>
              <a href="">
                Continue lendo<span>{">"}</span>
              </a>
            </div>
          </div>
          <div class={style.card} id="card3">
            <img src={teste1} alt="" />
            <div>
              <h2>Chegamos, Recife!</h2>
              <a href="">
                Continue lendo<span>{">"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <NavLinks />
    </div>
  );
};

export const AtendimentoCarousel: FunctionalComponent = () => {
  return (
    <div class={style.superContainer}>
      <div class={style.container}>
        <div class={style.atendimento_items}>
          <div class={style.atendimento_card} id="card1">
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
          <div class={style.atendimento_card} id="card2">
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
          <div class={style.atendimento_card} id="card3">
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
      </div>
      <NavLinks />
    </div>
  );
};
