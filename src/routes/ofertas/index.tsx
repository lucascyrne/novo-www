import { FunctionalComponent, h } from "preact";

import style from "./style";

import banner from "../../assets/img/ofertasbannertop.jpg";
import whitewpp from "../../assets/icons/white_whatsapp.png";
import tabloidtest from "../../assets/img/tabloidtest.jpg";

const Ofertas: FunctionalComponent = () => {
  return (
    <div id={style.ofertas}>
      <div id={style.banner} />
      <div id={style.ofertas_inner} class={style.row}>
        <div id={style.ofertas_left} class={style.col}>
          <h1>Ofertas Novo Atacarejo</h1>
          <div>
            <select name="stores" id="stores" class={style.select}>
              <option value="op0">Escolha por cidade</option>
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
              <h6>Ofertas válidas até dia 10/10 até dia 11/11</h6>
            </div>
            <div>
              <img src={tabloidtest} alt="" />
              <h6>Ofertas válidas até dia 10/10 até dia 11/11</h6>
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
