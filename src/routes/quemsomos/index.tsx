import { FunctionalComponent, h } from "preact";
import style from "./style";

import teste1 from "../../assets/img/teste1.jpg";
import { cookieInit } from "../../components/cookies";

const isWeb = (): boolean => {
  if (window.innerHeight < window.innerWidth) return true;
  return false;
};

const WebAbout: FunctionalComponent = () => {
  return (
    <div id={style.about}>
      <div id={style.about_text}>
        <h1>Quem somos</h1>
        <p>
          O Novo Atacarejo é uma rede pernambucana que surgiu com o objetivo de
          melhorar a qualidade de vida da população oferecendo o melhor das
          grandes redes pelo menor preço.
          <br />
          <br />O Novo conta com serviços de açougue, frios e padaria com
          produção própria, além da comercialização de alimentos perecíveis,
          mercearia, artigos de higiene, limpeza, bazar, automotivo,
          eletroportáteis, bomboniere e bebidas. Todas as unidades estão
          localizadas em um terreno de 20mil metros, com estacionamento próprio,
          ambiente climatizado, comercializando em torno de 9 mil itens.
        </p>
      </div>
      <img src={teste1} alt="" />
    </div>
  );
};

const MobileAbout: FunctionalComponent = () => {
  return (
    <div id={style.about}>
      <h1>Quem somos</h1>
      <img src={teste1} alt="" />
      <p>
        O Novo Atacarejo é uma rede pernambucana que surgiu com o objetivo de
        melhorar a qualidade de vida da população oferecendo o melhor das
        grandes redes pelo menor preço.
        <br />
        <br />O Novo conta com serviços de açougue, frios e padaria com produção
        própria, além da comercialização de alimentos perecíveis, mercearia,
        artigos de higiene, limpeza, bazar, automotivo, eletroportáteis,
        bomboniere e bebidas. Todas as unidades estão localizadas em um terreno
        de 20mil metros, com estacionamento próprio, ambiente climatizado,
        comercializando em torno de 9 mil itens.
      </p>
    </div>
  );
};

const WebInfoBanner: FunctionalComponent = () => {
  return (
    <div>
      <h2>
        Até 2021, o Novo vai abrir 06 lojas
        <br />
        no estado de Pernambuco
      </h2>
      <p>
        promovendo maior qualidade de vida para a família Pernambucana e
        <br />
        gerando mais de mil empregos diretos e três mil indiretos!
      </p>
    </div>
  );
};

const MobileInfoBanner: FunctionalComponent = () => {
  return (
    <div>
      <h2>
        Até 2023, serão
        <br />
        15 lojas abertas
        <br />
        em todo o estado,
      </h2>
      <p>
        promovendo maior qualidade de
        <br />
        vida para a família Pernambucana e<br />
        gerando mais de mil empregos
        <br />
        diretos e três mil indiretos!
      </p>
    </div>
  );
};

const WebMap: FunctionalComponent = () => {
  return (
    <div id={style.mapbanner}>
      <div id={style.maptext} class={style.col}>
        <h1>
          Somos 100%
          <br />
          Pernambucanos
        </h1>
        <p>
          As lojas do Novo encontram-se em locais estratégicos na capital e no
          interior do estado. Desta forma, atendemos muito mais do que a cidade
          em que está a loja, mas todas as cidades no entorno da região.
        </p>
        <p class={style.italic}>
          Em média, nossa rede recebe em torno de 150.000 clientes por mês.
        </p>
        <p>
          O Novo Atacarejo possui atendimento diferenciado para a cadeia
          transformadora de toda região. Temos um setor de venda no atacado para
          atender estes empreendedores, para que eles tenham ao seu alcance
          produtos com preço bom e todos os insumos necessários para fazer o seu
          negócio funcionar, ajudando a desenvolver economicamente os municípios
          que estão inseridos.
        </p>
      </div>
      <div id={style.imagemap} />
    </div>
  );
};

const MobileMap: FunctionalComponent = () => {
  return (
    <div id={style.mapbanner}>
      <h1>
        Somos 100%
        <br />
        Pernambucanos
      </h1>
      <div id={style.imagemap} />
      <p>
        O Novo Atacarejo chegou a Pernambuco com o objetivo de trazer os menores
        preços da região. Temos um cronograma de inauguração por todo o estado,
        com 15 lojas a serem abertas até 2023.
        <br />
        <br />O Novo conta com serviços de açougue, frios e padaria com produção
        própria, além da comercialização de alimentos perecíveis, não
        perecíveis, artigos de higiene, limpeza, automotivo, bomboniere e
        bebidas. Venha conhecer!
      </p>
    </div>
  );
};

const QuemSomos: FunctionalComponent = () => {
  cookieInit();

  return (
    <div id={style.quemsomos}>
      {isWeb() ? <WebAbout /> : <MobileAbout />}
      <div id={style.infobanner}>
        {isWeb() ? <WebInfoBanner /> : <MobileInfoBanner />}
      </div>
      <div id={style.valuesbanner}>
        <div id={style.valuesbanner_inner} class={style.row}>
          <div id={style.valuesbanner_left} class={style.col}>
            <div>
              <h3>Missão</h3>
              <p>
                Promover o orgulho de ser Novo oferecendo um ambiente encantador
                aos nossos colaboradores e fornecedores e assim contribuir com
                qualidade e preço justo para a melhoria de vida dos nossos
                clientes.
              </p>
            </div>
            <div>
              <h3>Visão</h3>
              <p>
                Torna-se líder do segmento na região, com foco em rentabilidade
                e crescimento em todas as áreas. Ser reconhecido como a melhor
                opção de compras pela população.
              </p>
            </div>
          </div>
          <div id={style.valuesbanner_center} class={style.col}>
            <h3>Valores</h3>
            <p>
              <span class={style.bold}>Encantar</span> – Criar uma experiência
              inesquecível aos clientes e fornecedores, resultando em fidelidade
              e relacionamento.
            </p>
            <p>
              <span class={style.bold}>Honestidade</span> – Ser verdadeiro, não
              omitir, não dissimular e assim promover o desenvolvimento pessoal
              e profissional.
            </p>
            <p>
              <span class={style.bold}>Disciplina</span> – Fundamental para as
              atividades do dia a dia, permite ter clareza nos seus objetivos,
              promove organização, obediência e respeito as regras e ao
              regimento interno.
            </p>
          </div>
          <div id={style.valuesbanner_right} class={style.col}>
            <p>
              <span class={style.bold}>Humildade</span> – Ter a virtude de saber
              o limite dos seus conhecimentos, estar aberto a ensinar e a
              aprender com o outro.
            </p>
            <p>
              <span class={style.bold}>Competência</span> – Conhecimentos,
              habilidades e comportamentos que permitem com eficácia contribuir
              para o crescimento da empresa.
            </p>
            <p>
              <span class={style.bold}>Atitude</span> – Sua iniciativa e forma
              de agir diante de todas as situações diárias, procurando sempre
              contribuir para o desenvolvimento da equipe.
            </p>
          </div>
        </div>
      </div>
      {isWeb() ? <WebMap /> : <MobileMap />}
    </div>
  );
};

export default QuemSomos;
