import { FunctionalComponent, h } from "preact";

import style from "./style";

const Contato: FunctionalComponent = () => {
  return (
    <div class={style.col}>
      <div id={style.contato}>
        <h1>Contato</h1>
        <p>
          Prezamos pela sua opinião sobre as nossas lojas e os nossos serviços.
          <br />
          Por isso, utilize esse canal direto para informações, elogios,
          sugestões e registro de insatisfações.
        </p>
        <form class={style.col} action="" method="post">
          <div class={style.row}>
            <div class={style.form_input}>
              <label htmlFor="name">Nome</label>
              <input type="text" />
            </div>
            <div class={style.form_input} id={style.m_left}>
              <label htmlFor="email">E-mail</label>
              <input type="email" />
            </div>
          </div>
          <div class={style.row}>
            <div class={style.form_input}>
              <label htmlFor="tel">Telefone</label>
              <input type="number" />
            </div>
            <div class={style.form_input} id={style.m_left}>
              <label htmlFor="subject">Assunto</label>
              <input type="text" />
            </div>
          </div>
          <div class={style.form_input}>
            <label htmlFor="message">Escreva aqui sua mensagem:</label>
            <textarea />
          </div>
        </form>
        <a href="" class={style.button}>
          Enviar
        </a>
      </div>
      <div id={style.trabalheconosco}>
        <h1>Trabalhe conosco</h1>
        <p>
          O Novo Atacarejo vem promovendo maior qualidade de vida para a família
          <br />
          pernambucana e gerando mais de mil empregos diretos e três mil
          indiretos!
        </p>
        <form action="" method="post" class={style.col}>
          <div class={style.row}>
            <div class={style.col}>
              <label htmlFor="name">Nome</label>
              <input type="text" />
            </div>
            <div class={style.col}>
              <label htmlFor="email">E-mail</label>
              <input type="email" />
            </div>
          </div>
          <div class={style.row}>
            <div class={style.col}>
              <label htmlFor="tel">Telefone</label>
              <input type="number" />
            </div>
            <div class={style.col}>
              <label htmlFor="state">Estado</label>
              <input type="text" />
            </div>
          </div>
          <div class={style.row}>
            <div class={style.col}>
              <label htmlFor="city">Cidade</label>
              <input type="text" />
            </div>
            <div class={style.col}>
              <label htmlFor="vocation">Função</label>
              <input type="text" />
            </div>
          </div>
          <div class={style.row}>
            <div class={style.col}>
              <label htmlFor="cv">Currículo</label>
              <input type="file" />
            </div>
            <div class={style.col}>
              <label htmlFor="state">Estado</label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contato;
