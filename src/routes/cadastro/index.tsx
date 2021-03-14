import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import { cookieInit } from "../../components/cookies";

import style from "./style";

const Cadastro: FunctionalComponent = () => {
  const [state, setState] = useState({
    comprasPessoais: false,
    atacado: false,
    politics: false,
    subscribe: false,
  })
  console.log(state);

  const onComprasChanged = (e): void => {
    const uncheck = !state.atacado
    const check = !state.comprasPessoais

    if (state.atacado) {
      setState(prevState => {
        return {
          ...prevState,
          atacado: uncheck
        }
      })
    }
    setState(prevState => {
      return {
        ...prevState,
        comprasPessoais: check
      }
    })
  }

  const onAtacadoChanged = (e): void => {
    const uncheck = !state.comprasPessoais
    const check = !state.atacado

    if (state.comprasPessoais) {
      setState(prevState => {
        return {
          ...prevState,
          comprasPessoais: uncheck
        }
      })
    }
    setState(prevState => {
      return {
        ...prevState,
        atacado: check
      }
    })
  }

  const onPoliticsChanged = (e): void => {
    const check = !state.politics
    setState({
      ...state,
      politics: check
    });
  }

  const onSubscribeChanged = (e): void => {
    const check = !state.subscribe
    setState({
      ...state,
      subscribe: check
    })
  }

  cookieInit();

  return (
    <div id={style.cadastro}>
      <h1>Cadastre-se</h1>
      <div id={style.radio}>
        <label htmlFor="comprasPessoais">
          <div>
            <input
              required
              type="checkbox"
              id="comprasPessoais"
              name="comprasPessoais"
              checked={state.comprasPessoais}
              onChange={onComprasChanged} />
            Compras pessoais
          </div>
        </label>
        <label htmlFor="atacado">
          <div>
            <input
              required
              type="checkbox"
              id="atacado"
              name="atacado"
              checked={state.atacado}
              onChange={onAtacadoChanged}
            />
            Atacado
          </div>
        </label>
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
        <label htmlFor="politics">
          <div>
            <input
              required
              type="checkbox"
              id="politics"
              name="politics"
              checked={state.politics}
              onChange={onPoliticsChanged}
            />
            Li e aceito a Política de Privacidade
          </div>
        </label>
        <label htmlFor="subscribe">
          <div>
            <input
              required
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={state.subscribe}
              onChange={onSubscribeChanged}
            />
            Desejo receber ofertas por e-mail do Novo Atacarejo
          </div>
        </label>
      </div>
      <a href="/" class={style.button}>
        Enviar
      </a>
    </div>
  );
};

export default Cadastro;
