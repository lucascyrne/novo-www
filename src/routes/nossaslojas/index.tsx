import { FunctionalComponent, h } from "preact";
import { useRef, useState } from "preact/hooks";

import style from "./style";

import teste1 from "../../assets/img/teste1.jpg";
import location from "../../assets/icons/location_red.jpg";
import whatsapp from "../../assets/icons/whatsapp_blue.jpg";
import phone from "../../assets/icons/phone.jpg";
import { cookieInit } from "../../components/cookies";

const NossasLojas: FunctionalComponent = () => {
  const [open, isOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = (): void => {
    const map = ref.current;

    if (map === null)
      throw console.error("Map app not working, press F5 to reload the page.");

    if (open) {
      isOpen(!open);
      map.style.display = "none";
    } else {
      isOpen(!open);
      map.style.display = "block";
    }
  };

  cookieInit();

  return (
    <div class={style.col}>
      <div id={style.nossaslojas}>
        <div id={style.nossaslojas_left} class={style.column}>
          <h1>Nossas Lojas</h1>
          <div id={style.stores_select}>
            <select name="stores" id="stores" class={style.select}>
              <option value="op0">Escolha por cidade</option>
              <option value="op1">Option 1</option>
              <option value="op2">Option 2</option>
              <option value="op3">Option 3</option>
              <option value="op4">Option 4</option>
            </select>
          </div>
          <div id={style.img}>
            <img src={teste1} alt="" />
          </div>
        </div>
        <div id={style.infocard}>
          <h2>Vitória de Santo Antão - PE</h2>
          <div id={style.infolocation} class={style.row}>
            <img src={location} alt="" />
            <p>
              Trevo da PE-050 com a BR-232,
              <br />
              na entrada de Vitória.
            </p>
          </div>
          <div id={style.infohours}>
            <h5>Horário de funcionamento</h5>
            <p>Seg a sáb: 7h às 21h</p>
            <p>Dom: 7h às 18h</p>
          </div>
          <div id={style.contact}>
            <div class={style.row}>
              <img src={whatsapp} alt="" />
              <p>(81) 98246-9459</p>
            </div>
            <div class={style.row}>
              <img src={phone} alt="" />
              <p>(81) 3771-7702</p>
            </div>
          </div>
          <button type="action" onClick={handleClick} id={style.infocard_btn}>
            Como chegar
          </button>
        </div>
      </div>
      <div ref={ref} id={style.map_container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.7089132152537!2d-37.061661484611875!3d-8.43022008747629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a81be1583b39cd%3A0x1679f024a93cf5d5!2sNovo%20Atacarejo%20Arcoverde!5e0!3m2!1sen!2sbr!4v1613998983706!5m2!1sen!2sbr"
          width="970"
          height="400"
          style="border:0;"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default NossasLojas;
