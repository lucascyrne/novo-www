import { FunctionalComponent, h } from "preact";

import style from "./style.css";

const Cookies: FunctionalComponent = () => {
  return (
    <div id={style.cookies_container}>
      <div>
        <p>
          Utilizamos seus dados para oferecer uma experiência mais relevante ao
          analisar e personalizar conteúdos e anúncios em nossa plataforma e em
          serviços de terceiros. Ao navegar pelo site, você autoriza o Novo
          Atacarejo a coletar estes dados e utilizá-los para estes fins.
          Consulte nossa <a href="/">Política de Privacidade.</a>
        </p>
        <button>Aceitar!</button>
      </div>
    </div>
  );
};

export default Cookies;
