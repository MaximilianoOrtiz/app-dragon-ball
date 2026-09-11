const Header = {
    render(selector) {
        const element = document.querySelector(selector);

        if (!element) return;

        element.innerHTML = `
            <header class="site-header">
                <a href="./index.html" class="site-header__brand" aria-label="Capsule Store - Inicio">

                    <img
                        class="site-header__logo"
                        src="./assets/images/dragon-ball.png"
                        alt=""
                    >

                    <div class="site-header__title">
                        <span class="site-header__name">
                            Capsule Store
                        </span>
                    </div>
                </a>
            </header>
        `;
    }
};
