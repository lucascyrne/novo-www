import { h, render, Component } from "preact";

import style from "./style.css";

type Props = {};

type State = {
  closed: boolean;
};

const Nothing = (): null => null;

const getCookie = (): string[] => {
  if (typeof document !== "undefined")
    // console.log("getcookies:", document.cookie);
    return (document.cookie || "").split(";");
};

const setCookie = (c: string): void => {
  if (typeof document !== "undefined") {
    const cookies = document.cookie;
    document.cookie = `${cookies};${c}`;
  }
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
  if (typeof c !== "undefined")
    return c.indexOf("sylogentpolicyseen=true") > -1;
};

export const cookieInit = (): void => {
  setCookie("sylogentpolicyseen=true");
  if (!checkCookies()) {
    if (typeof document !== "undefined")
      render(<CookiePopup />, document.getElementById("app"));
  }
};
