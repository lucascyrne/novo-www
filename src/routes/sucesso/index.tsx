import { FunctionalComponent, h } from "preact";
import { cookieInit } from "../../components/cookies";

import sucess from "../../assets/icons/sucess.svg";

import style from "./style.css";

const Sucesso: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.sucesso}>
      <div id={style.message}>
        <img src={sucess} alt="" />
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
