const Hero = {

    render(selector) {

        const element = document.querySelector(selector);

        if (!element) return;

        element.innerHTML = `
            <div class="hero">

                <div
                    class="hero__decoration hero__decoration--top"
                    aria-hidden="true">
                </div>

                <div
                    class="hero__decoration hero__decoration--bottom"
                    aria-hidden="true">
                </div>

                <div class="hero__content">

                    <div class="hero__brand">

                        <span
                            class="hero__brand-icon"
                            aria-hidden="true">
                            🟠
                        </span>

                        <span class="hero__brand-name">
                            Dragon Ball
                        </span>

                    </div>

                    <h1 class="hero__title">
                        Figuras y coleccionables

                        <span class="hero__title-highlight">
                            Dragon Ball
                        </span>
                    </h1>

                    <p class="hero__description">
                        Encontrá las figuras de tus personajes
                        favoritos del universo Dragon Ball.
                        Coleccionables de edición oficial.
                    </p>

                    <div class="hero__actions">

                        <a
                            href="/search.html"
                            class="hero__button hero__button--primary">
                            Ver catálogo
                        </a>

                        <a
                            href="/shoppingCart.html"
                            class="hero__button hero__button--secondary">
                            Mi carrito
                        </a>

                    </div>

                </div>

            </div>
        `;
    }
};