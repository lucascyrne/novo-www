import { h, render, Component } from "preact";

import style from "./style.css";

type Props = {};

type State = {
  closed: boolean;
};

const Nothing = (): null => null;

const getCookie = (): string[] => {
  // console.log("getcookies:", document.cookie);
  return (document.cookie || "").split(";");
};

const setCookie = (c: string): void => {
  const cookies = document.cookie;
  document.cookie = `${cookies};${c}`;
};

class CookiePopup extends Component<Props, State> {
  clickClose = (): void => {
    setCookie("sylogentpolicyseen=true");
    render(<Nothing />, document.getElementById("app"));
  };

  public render(): h.JSX.Element {
    return (
      <div id={style.cookies_container} class={style.slide_top}>
        <div>
          <p>
            Utilizamos seus dados para oferecer uma experiência mais relevante
            ao analisar e personalizar conteúdos e anúncios em nossa plataforma
            e em serviços de terceiros. Ao navegar pelo site, você autoriza o
            Novo Atacarejo a coletar estes dados e utilizá-los para estes fins.
            Consulte nossa <a href="/">Política de Privacidade.</a>
          </p>
          <button onClick={this.clickClose}>Entendi!</button>
        </div>
      </div>
    );
  }
}

const checkCookies = (): boolean => {
  const c = getCookie();
  console.log(c);
  return c.indexOf("sylogentpolicyseen=true") > -1;
};

export const cookieInit = (): void => {
  setCookie("sylogentpolicyseen=true");
  if (!checkCookies()) {
    render(<CookiePopup />, document.getElementById("app"));
  }
};
