import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
    return (
        <div id="app">
            <Header />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/quem-somos/" component={NotFoundPage} />
                <Route path="/nossas-lojas/" component={NotFoundPage} />
                <Route path="/ofertas/" component={NotFoundPage} />
                <Route path="/contato/" component={NotFoundPage} />
                <Route path="/cadastro/" component={NotFoundPage} />
                <Route path="/noticia/" component={NotFoundPage} />
                <Route path="/noticia-selecionada/" component={NotFoundPage} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
