const Header = {
    render(selector) {
        const element = document.querySelector(selector);

        if (!element) return;

        element.innerHTML = `
            <header class="site-header">
                <a href="/" class="site-header__brand" aria-label="Dragon Ball - Inicio">

                    <img
                        class="site-header__logo"
                        src="/assets/images/dragon-ball.png"
                        alt=""
                    >

                    <div class="site-header__title">
                        <span class="site-header__name">
                            DRAGON BALL
                        </span>
                    </div>
                </a>
            </header>
        `;
    }
};
