import { FunctionalComponent, h } from "preact";

import style from "./style";

const Cadastro: FunctionalComponent = () => {
  return (
    <div id={style.cadastro}>
      <h1>Cadastre-se</h1>
      <div id={style.radio}>
        <div>
          <input type="radio" name="radiobutton" />
          Compras pessoais
        </div>
        <div>
          <input type="radio" name="radiobutton" />
          Atacado
        </div>
      </div>
      <form action="" method="post">
        <div class={style.row}>
          <div class={style.col}>
            <label htmlFor="">Nome</label>
            <input type="text" />
          </div>
          <div class={style.col} id={style.m_left}>
            <label htmlFor="">CPF</label>
            <input type="number" />
          </div>
        </div>
        <div class={style.row}>
          <div class={style.col}>
            <label htmlFor="">Telefone</label>
            <input type="tel" />
          </div>
          <div class={style.col} id={style.m_left}>
            <label htmlFor="">Estado</label>
            <input type="text" />
          </div>
        </div>
        <div class={style.row}>
          <div class={style.col}>
            <label htmlFor="">Cidade</label>
            <input type="text" />
          </div>
        </div>
      </form>
      <div id={style.politics}>
        <div>
          <input type="radio" name="politics" />
          Li e aceito a Política de Privacidade
        </div>
        <div>
          <input type="radio" name="subscribe" />
          Desejo receber ofertas por e-mail do Novo Atacarejo
        </div>
      </div>
      <a href="" class={style.button}>
        Enviar
      </a>
    </div>
  );
};

export default Cadastro;
