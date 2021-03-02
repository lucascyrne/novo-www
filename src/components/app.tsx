import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import Home from "../routes/home";
import QuemSomos from "../routes/quemsomos";
import NossasLojas from "../routes/nossaslojas";
import Ofertas from "../routes/ofertas";
import CartaoNovo from "../routes/cartaonovo";
import Contato from "../routes/contato";
import Atendimento from "../routes/atendimento";
import Cadastro from "../routes/cadastro";
import Noticias from "../routes/noticias";
import NoticiaSingle from "../routes/noticias/single/index-alt";
import Sucesso from "../routes/sucesso";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import Footer from "./footer";

const App: FunctionalComponent = () => {
  return (
    <div id="app">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/quem-somos/" component={QuemSomos} />
        <Route path="/nossas-lojas/" component={NossasLojas} />
        <Route path="/ofertas/" component={Ofertas} />
        <Route path="/cartao-novo/" component={CartaoNovo} />
        <Route path="/contato/" component={Contato} />
        <Route path="/atendimento/" component={Atendimento} />
        <Route path="/cadastro/" component={Cadastro} />
        <Route path="/noticias/" component={Noticias} />
        <Route path="/noticias/single" component={NoticiaSingle} />
        <Route path="/sucesso" component={Sucesso} />
        <Route path="/noticia-selecionada/" component={NotFoundPage} />
        <NotFoundPage default />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
