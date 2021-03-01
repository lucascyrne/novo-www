import { FunctionalComponent, h } from "preact";

import style from "./style";

const NossasLojas: FunctionalComponent = () => {
  return (
    <div id={style.nossaslojas}>
      <div id={style.nossaslojas_left} class={style.column}>
        <h1>Nossas Lojas</h1>
        <div>
          <select name="stores" id="stores" class={style.select}>
            <option value="op0">Escolha por cidade</option>
            <option value="op1">Option 1</option>
            <option value="op2">Option 2</option>
            <option value="op3">Option 3</option>
            <option value="op4">Option 4</option>
          </select>
        </div>
        <div id={style.img}>
          <img src="" alt="" />
        </div>
      </div>
      <div id={style.infocard}>
        <h2>Vitória de Santo Antão - PE</h2>
        <div id={style.infolocation} class={style.row}>
          <img src="" alt="" />
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
            <img src="" alt="" />
            <p>(81) 98246-9459</p>
          </div>
          <div class={style.row}>
            <img src="" alt="" />
            <p>(81) 3771-7702</p>
          </div>
        </div>
        <a href="">Como chegar</a>
      </div>
    </div>
  );
};

export default NossasLojas;
