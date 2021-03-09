import { FunctionalComponent, h } from "preact";

import style from "./style";

import cardwoman from "../../assets/img/cartaonovo_girl.jpg";
import { cookieInit } from "../../components/cookies";

const CartaoNovo: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.cartaonovo} class={style.col}>
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
      <div id={style.cartaonovo_inner} class={style.row}>
        <div class={style.col} id={style.fst_paragraph}>
          <div>
            <h1>Conheça o NOVOCARD</h1>
            <ul>
              <li>Aprovação imediata e crédito na hora;</li>
              <li>
                Até 40 dias para pagar, sem juros, a depender da data de compra;
              </li>
              <li>Até 2 cartões adicionais grátis;</li>
              <li>Consulta de fatura on-line;</li>
            </ul>
          </div>
          <div>
            <h1>É fácil adquirir o seu NOVOCARD!</h1>
            <p>
              Basta comparecer a uma de nossas lojas, com a seguinte
              documentação:
            </p>
            <ul>
              <li>Documento de identidade com foto;</li>
              <li>CPF;</li>
              <li>Comprovante de residência e renda recentes;</li>
            </ul>
          </div>
        </div>
        <div id={style.cartao_img}>
          <img src={cardwoman} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartaoNovo;
