import { FunctionalComponent, h } from "preact";

import style from "./style.css";

import help from "../../assets/icons/help.png";
import { cookieInit } from "../../components/cookies";

const Contato: FunctionalComponent = () => {
  const handleClick = (): void => {
    alert("Envie um arquivo no formato PDF ou DOC com tamanho de até 5mb.");
  };

  cookieInit();

  return (
    <div class={style.col}>
      <div id={style.contato}>
        <h1>Contato</h1>
        <p>
          Prezamos pela sua opinião sobre as nossas lojas e os nossos serviços.
          <br />
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
          <br />
          pernambucana e gerando mais de mil empregos diretos e três mil
          indiretos!
        </p>
        <form action="" method="post" class={style.col}>
          <div class={style.row}>
            <div class={(style.col, style.form_input)}>
              <label htmlFor="name">Nome</label>
              <input type="text" />
            </div>
            <div class={(style.col, style.form_input)} id={style.m_left}>
              <label htmlFor="email">E-mail</label>
              <input type="email" />
            </div>
          </div>
          <div class={style.row}>
            <div class={(style.col, style.form_input)}>
              <label htmlFor="tel">Telefone</label>
              <input type="number" />
            </div>
            <div class={(style.col, style.form_input)} id={style.m_left}>
              <label htmlFor="state">Estado</label>
              <input type="text" />
            </div>
          </div>
          <div class={style.row}>
            <div class={(style.col, style.form_input)}>
              <label htmlFor="city">Cidade</label>
              <input type="text" />
            </div>
            <div class={(style.col, style.form_input)} id={style.m_left}>
              <label htmlFor="vocation">Função</label>
              <input type="text" />
            </div>
          </div>
          <div class={style.row}>
            <div class={style.col}>
              <label id={(style.m_bot, style.cvTitle)}>Currículo</label>
              <label htmlFor="cv" id={style.input_file}>
                Anexe o currículo em PDF
              </label>
              <input type="file" id="cv" />
            </div>
            <div class={style.col} style="position: relative;">
              <div
                id={(style.m_left, style.help)}
                class={style.row}
                onClick={handleClick}
              >
                <img src={help} alt="" />
                <p>Preciso de ajuda</p>
              </div>
            </div>
          </div>
          <a href="" class={style.button}>
            Enviar
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contato;
