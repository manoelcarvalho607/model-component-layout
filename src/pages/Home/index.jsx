import Container from "../../components/container";



export default function Home() {
    return (
        <Container >
            <header className="l-header">
                header
            </header>
            <main className="l-main">
                <section className="l-content">
                    <article className="c-card">
                        <img
                            src="https://picsum.photos/200/200/"
                            alt="Restaurante..."
                            width={200}
                            height={200}
                            className="c-card__image"
                        />
                        <div className="c-card__content">
                            <div className="c-card__identification">
                                <h3 className="c-card__name">Churrasquinho da esquina</h3>
                                <ul className="c-tags">
                                    <li className="c-tags__item">
                                        <a href="#" className="c-tags__link">Churrasco</a>
                                    </li>
                                    <li className="c-tags__item">
                                        <a href="#" className="c-tags__link">Bebida</a>
                                    </li>
                                    <li className="c-tags__item">
                                        <a href="#" className="c-tags__link">Suco</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="c-card__info">
                                <div className="c-iconized-info">
                                    <svg
                                        className="c-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.0"
                                        viewBox="0 0 50 50"><path d="M25.6 2.6c-3.5 3.4-.2 8.8 5.1 8.2 2.4-.3 2.8-.8 3.1-3.8.5-5.2-4.6-8-8.2-4.4zM31.5 4c.3.5-.1 1-.9 1-.9 0-1.6.4-1.6 1 0 .5.7 1 1.5 1s1.5.4 1.5 1c0 1.1-2 1.3-4.4.4-1.6-.6-2.2-3.5-.9-4.7 1-1 4.1-.8 4.8.3zM18.2 14.7c-1.6 2.1-3.4 4.8-4.1 6-1 2-2 2.3-6.6 2.3-5.1 0-5.5.2-5.5 2.4 0 1.7.7 2.6 2.4 3l2.5.6-2.5 2.5C-.5 36.4 3 45 10 45c3.1 0 8-3.7 8-6 0-.6 1.4-1 3.3-.9 7.8.6 9.4.1 10-3.1.6-2.9 4.4-7.6 5.4-6.6.3.3-.4 1.7-1.6 3.2-6.4 8.1 4.2 18.2 11.4 10.9 3.3-3.2 3.3-7.8 0-11-1.3-1.4-3.6-2.5-5-2.5s-2.5-.5-2.5-1.1c0-1.2 4-.8 7.3.6 1 .4 1.7.3 1.7-.4 0-1.5-4.3-3.1-8.1-3.1-2.2 0-2.9-.5-2.9-1.9 0-1.1.5-2.3 1-2.6 2-1.3-.9-4.5-4.1-4.5-1.9 0-4.3-1-6.1-2.5-4-3.4-6.1-3.1-9.6 1.2zm8.8.8c1.6 1.7 3.4 2.5 5.7 2.5 1.8 0 3.3.4 3.3 1 0 1.6-7.6 1.2-9-.5-1.8-2.1-2.6-1.9-4.9 1.4L20 22.8l3.4 2c3.4 2 3.4 2.1 2.5 6.4-1 4.3-2.4 6.6-3.4 5.6-.3-.3-.2-2.4.3-4.6.9-4 .9-4-2.9-5.7-2.1-1-4-2.3-4.3-3.1-.6-1.5 6-10.4 7.8-10.4.7 0 2.3 1.1 3.6 2.5zm-1 5.4c0 .5-.7 1.1-1.5 1.5-1.5.5-2-.5-.8-1.7.9-1 2.3-.9 2.3.2zm8.9 3c.8 1.4.4 2.4-1.9 4.6-1.5 1.5-3.1 3.8-3.4 5.1-.4 1.3-1.1 2.4-1.6 2.4-1.2 0-1.2-.4-.1-5.2.6-2.7.5-4.2-.5-5.7-1.6-2.2-.8-2.9 3.8-3 1.7-.1 3.1.6 3.7 1.8zM17 27c4.1 2.1 4.4 2.8 3.4 6.7-.8 3-1.6 2.9-3.5-.5-1-1.8-3.3-3.4-6.5-4.6C3.4 26 2.8 25 8.3 25c2.8 0 6.4.8 8.7 2zm-2.7 6.2 2.2 2.3-3.7.3C10.7 36 9 36.5 9 37s1.7 1 3.8 1.2l3.7.3-2.3 2.3C13 42 11.1 43 10 43c-2.6 0-6-3.4-6-6s3.4-6 6-6c1.1 0 3 1 4.3 2.2zM45 33c1.1 1.1 2 2.9 2 4 0 2.6-3.4 6-6 6-2.5 0-6-3.4-6-5.8 0-1 .7-2.7 1.4-3.8 1.4-1.8 1.5-1.8 2.6 1.3.7 1.8 1.6 3.3 2.2 3.3.8 0 .6-1.8-.9-5.8-.8-1.9 2.5-1.4 4.7.8z" /></svg>
                                    Entregando
                                </div>
                                <div className="c-iconized-info">
                                    <svg
                                        className="c-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.0"
                                        viewBox="0 0 50 50"
                                    ><path d="M20 4c0 1.1.5 2 1 2 2.1 0 .9 1.8-1.7 2.5C11.7 10.4 6 18.4 6 27.3 6 46 31.1 53 41.1 37.2c3.6-5.8 4-13.2.8-19.3-1.9-3.9-2-4.1-.3-5.4 1.6-1.1 1.6-1.5.5-2.9-1.7-2-3.1-2-4.5-.1-1 1.4-1.6 1.4-5.3-.2C28.3 7.6 26.7 6 29 6c.6 0 1-.9 1-2 0-1.7-.7-2-5-2s-5 .3-5 2zm9 0c0 .5-1.8 1-4 1s-4-.5-4-1c0-.6 1.8-1 4-1s4 .4 4 1zm-3 3c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm6.9 3.8c12.2 6.2 13.4 23.3 2.2 30.9C17.6 53.5-2.6 30.1 11.8 14.6c5.3-5.6 14.4-7.3 21.1-3.8zm8.1.3c0 .6-.4.7-1 .4-.5-.3-1-1.1-1-1.6 0-.6.5-.7 1-.4.6.3 1 1.1 1 1.6z" /><path d="M16 18.3c0 .4 1.6 2.1 3.5 3.8C21.4 23.8 23 26 23 27c0 1.1.9 1.9 2.5 2.2 2.9.6 2.8.7 1.5-2.6-.5-1.4-1.7-2.6-2.7-2.6-.9 0-3.2-1.4-5-3.2-1.8-1.8-3.3-2.9-3.3-2.5zM26 27c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1z" /></svg>
                                    40min
                                </div>
                                <div className="c-iconized-info">
                                    <svg
                                        className="c-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.0"
                                        viewBox="0 0 50 50"><path d="M13 10.1C2.1 18.7-1.3 22.1 2.4 20.7c1.4-.6 1.6.8 1.6 12.8V47h42V33.5c0-12 .2-13.4 1.6-12.8 3.8 1.4.3-2.1-10.6-10.6C30.7 5.1 25.3 1 25 1c-.3 0-5.7 4.1-12 9.1zm22 1 9 7.1V45H6V18.2l8.7-7c4.9-3.9 9.4-7.1 10.1-7.1.7-.1 5.3 3.1 10.2 7z" /><path d="M14.7 17.7c-2 1.9.4 9.4 3.8 12.3 1.4 1.2 1.3 1.6-1.6 4.6-4.2 4.4-2.9 5.8 1.4 1.6 3.1-3 3.4-3.1 5-1.5s1.8 1.6 3.4 0c1.6-1.6 1.9-1.5 5 1.5 5.2 5 5.2 2.3 0-3-2.6-2.6-4.7-5.1-4.7-5.5 0-.4 1.1-.7 2.5-.7 4.7 0 8.2-5.9 5.3-8.8-2.9-2.9-8.8.6-8.8 5.3 0 3.6-1.3 3.1-5.8-2-4.1-4.7-4.4-4.9-5.5-3.8zm18.9 2.8c.7 1.8-1.3 4.5-3.3 4.5-1.9 0-2.8-2.7-1.3-4.5 1.6-1.9 3.9-1.9 4.6 0zm-11.3 5.9c3.1 3.7 4.3 5.7 3.5 6.2-1.3.9-9.8-7.8-9.8-10 0-2.7 1.4-1.8 6.3 3.8z" /></svg>
                                    Retirada no local
                                </div>
                                <div className="c-iconized-info">
                                    <svg
                                        className="c-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.0"
                                        viewBox="0 0 50 50"
                                    ><path d="M3 16.3c0 4.5.3 5.4 2.3 6.2 1.2.6 2.2 1.7 2.2 2.5s-1 1.9-2.2 2.5c-2 .8-2.3 1.7-2.3 6.2V39h44v-5.4c0-4.9-.2-5.5-2.2-5.8-1.7-.2-2.3-1-2.3-2.8 0-1.8.6-2.6 2.3-2.8 2-.3 2.2-.9 2.2-5.8V11H3v5.3zm41-.2c0 1.2-1.1 3.2-2.5 4.5-1.4 1.3-2.5 3.2-2.5 4.4 0 1.2 1.1 3.1 2.5 4.4 1.4 1.3 2.5 3.3 2.5 4.5 0 2.1-.3 2.1-19 2.1S6 36 6 33.9c0-1.2 1.1-3.2 2.5-4.5 3.2-2.9 3.2-5.9 0-8.8C7.1 19.3 6 17.3 6 16.1 6 14 6.3 14 25 14s19 0 19 2.1z" /><path d="M23.7 24.5C19.5 33 19.5 33 21.3 33c.7 0 2.9-3.4 5-7.5 4.2-8.5 4.2-8.5 2.4-8.5-.7 0-2.9 3.4-5 7.5zM17.5 20c-.4.7-.3 1.6.3 2.2 1.4 1.4 4.5.2 4-1.5-.6-1.6-3.4-2.1-4.3-.7zM28.5 28c-.4.7-.3 1.6.3 2.2 1.4 1.4 4.5.2 4-1.5-.6-1.6-3.4-2.1-4.3-.7z" /></svg>
                                    Aceita cupom
                                </div>
                            </div>
                        </div>
                        <div className="c-card__cta">
                            <a href="#" className="c-buttom">Ver catalago</a>
                            <a href="#" className="c-card__favorite"></a>
                        </div>
                    </article>
                </section>
                <aside className="l-aside">
                    <fieldset className="c-filter">
                        <legend className="c-filter__legend">Forma de pagamento</legend>
                        <label className="c-filter__item">
                            <span className="c-filter__check">
                                <input type="checkbox" name="" id="a"></input>
                            </span>
                            <span className="c-filter__label">Dinheiro</span>
                        </label>
                        <label className="c-filter__item">
                            <span className="c-filter__check">
                                <input type="checkbox" name="" id="b"></input>
                            </span>
                            <span className="c-filter__label">Cartão</span>
                        </label>
                    </fieldset>
                    <fieldset className="c-filter">
                        <legend className="c-filter__legend">Tipo de entrega</legend>
                        <label className="c-filter__item">
                            <span className="c-filter__check">
                                <input type="checkbox" name="" id="c"></input>
                            </span>
                            <span className="c-filter__label">Deliver</span>
                        </label>
                        <label className="c-filter__item">
                            <span className="c-filter__check">
                                <input type="checkbox" name="" id="d"></input>
                            </span>
                            <span className="c-filter__label">Retirada</span>
                        </label>
                    </fieldset>
                </aside>
            </main>
            <footer className="l-footer">
                <section className="l-footer__info">
                    <div className="l-footer__content">
                        info
                    </div>
                </section>
                <section className="l-footer__copyright">
                    <div className="l-footer__content">
                        copyright
                    </div>
                </section>
            </footer>
        </Container>
    )
}

