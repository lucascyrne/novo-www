import { FunctionalComponent, h } from "preact";

import style from "./style.css";

import whitewpp from "../../assets/icons/white_whatsapp.png";
import tabloidtest from "../../assets/img/tabloidtest.jpg";
import { cookieInit } from "../../components/cookies";

const Ofertas: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.ofertas}>
      <div id={style.banner} />
      <div id={style.ofertas_inner} class={style.row}>
        <div id={style.ofertas_left} class={style.col}>
          <h1>Ofertas vigentes</h1>
          <div id={style.stores_select}>
            <select name="stores" id="stores" class={style.select}>
              <option value="op0">Escolha por loja</option>
              <option value="op1">Option 1</option>
              <option value="op2">Option 2</option>
              <option value="op3">Option 3</option>
              <option value="op4">Option 4</option>
            </select>
          </div>
        </div>
        <div class={style.col}>
          <div id={style.tabloids}>
            <div>
              <img src={tabloidtest} alt="" />
              <h6>OFERTAS DA SEMANA - DE 21 A 24/12</h6>
            </div>
            <div>
              <img src={tabloidtest} alt="" />
              <h6>OFERTAS DE NATAL | DE 14 A 18/12</h6>
            </div>
          </div>
          <div id={style.btn}>
            <a href="" class={style.button}>
              <img src={whitewpp} alt="" />
              Quero as ofertas por Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ofertas;
