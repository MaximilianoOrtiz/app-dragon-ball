const Footer = {

    render(selector) {

        const element = document.querySelector(selector);

        if (!element) return;

        element.innerHTML = `
            <footer class="site-footer">
                <div class="site-footer__content">
                    <div class="site-footer__brand">
                        <img
                            class="site-footer__logo"
                            src="./assets/images/dragon-ball.png"
                            alt="Dragon Ball"
                        >
                        <span class="site-footer__name">
                            Dragon Ball
                        </span>
                    </div>
                    <p class="site-footer__description">
                        Proyecto académico · Datos de
                        <span>Dragon Ball API</span>
                    </p>
                    <span class="site-footer__year">
                        © 2026
                    </span>
                </div>
            </footer>
        `;
    }
};