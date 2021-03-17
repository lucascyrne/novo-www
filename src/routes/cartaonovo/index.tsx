import { FunctionalComponent, h } from "preact";

import style from "./style.css";

import cardwoman from "../../assets/img/cartaonovo_girl.png";
import { cookieInit } from "../../components/cookies";

const Nothing = (): null => null;

const isWeb = (): boolean => {
  if (typeof window !== "undefined")
    if (window.innerHeight < window.innerWidth) return true;
  return false;
};

const WebCartao = (): h.JSX.Element => {
  return (
    <div id={style.cartao}>
      <h1>
        Um jeito novo
        <br />
        de pagar as suas
        <br />
        compras, com
        <br />
        mais comodidade.
      </h1>
    </div>
  );
};

const MobileCartao = (): h.JSX.Element => {
  return (
    <div id={style.cartao}>
      <h1>Um jeito novo de pagar as suas compras, com mais comodidade.</h1>
    </div>
  );
};

const WebListItems = (): h.JSX.Element => {
  return (
    <ul>
      <li>
        <span>Aprovação imediata e crédito na hora;</span>
      </li>
      <li>
        <span>
          Até 40 dias para pagar, sem juros, a depender da data de compra;
        </span>
      </li>
      <li>
        <span>Até 2 cartões adicionais grátis;</span>
      </li>
      <li>
        <span>Consulta de fatura on-line;</span>
      </li>
    </ul>
  );
};

const MobileListItems = (): h.JSX.Element => {
  return (
    <ul>
      <li>
        <span>Aprovação imediata e crédito na hora;</span>
      </li>
      <li>
        <span>
          Até 40 dias para pagar, sem juros, a depender da data de compra;
        </span>
      </li>
      <li>
        <span>Até 2 cartões adicionais grátis;</span>
      </li>
      <li>
        <span>Consulta de fatura on-line;</span>
      </li>
      <li>
        <span>Mais crédito para o seu negócio;</span>
      </li>
      <li>
        <span>
          Acesso o resumo da fatura ou tire dúvidas pelo atendimento (11)
          3003-3099 ou baixe o app Meu Cartão Tricard.
        </span>
      </li>
    </ul>
  );
};

const WebRequesites = (): h.JSX.Element => {
  return (
    <div>
      <h1>É fácil adquirir o seu NOVOCARD!</h1>
      <p>
        Basta comparecer a uma de nossas lojas, com a seguinte documentação:
      </p>
      <ul>
        <li>
          <span>Documento de identidade com foto;</span>
        </li>
        <li>
          <span>CPF;</span>
        </li>
        <li>
          <span>Comprovante de residência e renda recentes;</span>
        </li>
      </ul>
    </div>
  );
};

const MobileRequesites = (): h.JSX.Element => {
  return (
    <div id={style.requisites}>
      <h1>Veja como é fácil adquirir o seu NOVOCARD!</h1>
      <p>Compareça a uma de nossas lojas, com a seguinte documentação:</p>
    </div>
  );
};

const RedBanner = (): h.JSX.Element => {
  return (
    <div id={style.redbanner}>
      <div>
        <div>
          <h1>Pessoa Física</h1>
          <ul>
            <li>Documento de identidade com foto;</li>
            <li>CPF;</li>
            <li>Comprovante de residência e renda decentes.</li>
          </ul>
        </div>
        <div>
          <h1>Empresarial</h1>
          <ul>
            <li>Empresarial</li>
            <li>CNPJ;</li>
            <li>E-mail;</li>
            <li>Telefone para contato;</li>
            <li>Identidade do proprietário.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CartaoNovo: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.cartaonovo} class={style.col}>
      {isWeb() ? <WebCartao /> : <MobileCartao />}
      <div id={style.cartaonovo_inner} class={style.row}>
        <div class={style.col} id={style.fst_paragraph}>
          <h1>Conheça o NOVOCARD</h1>
          {isWeb() ? <WebListItems /> : <MobileListItems />}
          {isWeb() ? <WebRequesites /> : <MobileRequesites />}
        </div>
        <div id={style.cartao_img}>
          <img src={cardwoman} alt="" />
        </div>
      </div>
      {isWeb() ? <Nothing /> : <RedBanner />}
    </div>
  );
};

export default CartaoNovo;
