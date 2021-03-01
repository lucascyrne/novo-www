import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <div id={style.home}>
            <div id={style.banner}>
                <img class={style.img} src="" alt="" />
                <div class={style.info}>
                    <h1>Example Of Title To Be Read</h1>
                    <p>Example of not too big paragraph to be read. Example of not too big paragraph to be read</p>
                    <a class={style.button}>
                        Saiba mais
                    </a>
                </div>
            </div>
            <div id={style.ofertas}>
                <h1>Ofertas</h1>
                <img src="" alt="" />
            </div>
            <div id={style.fique_por_dentro}>
                <div class={style.news_card}>
                    <img src="" alt="" />
                    <h2>Example of title not to big that's gonna be read!</h2>
                    <a href="">Continue Lendo<span>{'>'}</span></a>
                </div>
                <div class={style.news_card}>
                    <img src="" alt="" />
                    <h2>Example of title not to big that's gonna be read!</h2>
                    <a href="">Continue Lendo<span>{'>'}</span></a>
                </div>
                <div class={style.news_card}>
                    <img src="" alt="" />
                    <h2>Example of title not to big that's gonna be read!</h2>
                    <a href="">Continue Lendo<span>{'>'}</span></a>
                </div>
            </div>
            <div id={style.cartao}>
                <h1>Um jeito novo<br /> de pagar suas compras, com<br /> mais comodidade.</h1>
                <a class={style.button}>Saiba mais</a>
            </div>
        </div>
    );
};

export default Home;
