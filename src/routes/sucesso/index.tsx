import { FunctionalComponent, h } from "preact";

import style from "./style";

const Sucesso: FunctionalComponent = () => {
  return (
    <div id={style.sucesso}>
      <div id={style.message}>
        <img src="" alt="" />
        <h1>Seu cadastro foi enviado com sucesso!</h1>
        <p>
          Para qualquer alteração de informação, entre em
          <br />
          contato conosco pelo{" "}
          <span id={style.red}>lgpd@novoatacarejo.com</span>
        </p>
      </div>
    </div>
  );
};

export default Sucesso;
