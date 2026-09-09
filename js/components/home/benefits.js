const Benefits = {

    render(selector) {

        const element = document.querySelector(selector);

        if (!element) return;

        element.innerHTML = `
            <div
                class="benefits"
                aria-labelledby="benefits-title">

                <header class="benefits__header">

                    <h2
                        class="benefits__title"
                        id="benefits-title">
                        ¿Por qué elegirnos?
                    </h2>

                    <p class="benefits__subtitle">
                        Tu experiencia es lo primero
                    </p>

                </header>

                <div class="benefits__list">

                    <article class="benefits__item">

                        <div
                            class="benefits__icon"
                            aria-hidden="true">
                            ✓
                        </div>

                        <div class="benefits__content">

                            <h3 class="benefits__name">
                                Productos originales
                            </h3>

                            <p class="benefits__description">
                                Coleccionables de edición oficial
                                con garantía de autenticidad.
                            </p>

                        </div>

                    </article>

                    <article class="benefits__item">

                        <div
                            class="benefits__icon"
                            aria-hidden="true">
                            ▣
                        </div>

                        <div class="benefits__content">

                            <h3 class="benefits__name">
                                Pago seguro
                            </h3>

                            <p class="benefits__description">
                                Múltiples métodos de pago con
                                encriptación SSL.
                            </p>

                        </div>

                    </article>

                    <article class="benefits__item">

                        <div
                            class="benefits__icon"
                            aria-hidden="true">
                            ↯
                        </div>

                        <div class="benefits__content">

                            <h3 class="benefits__name">
                                Envío gratis +$60
                            </h3>

                            <p class="benefits__description">
                                Sin costo de envío en compras
                                superiores al monto mínimo.
                            </p>

                        </div>

                    </article>

                    <article class="benefits__item">

                        <div
                            class="benefits__icon"
                            aria-hidden="true">
                            ◷
                        </div>

                        <div class="benefits__content">

                            <h3 class="benefits__name">
                                Seguimiento en tiempo real
                            </h3>

                            <p class="benefits__description">
                                Revisá el estado de tus pedidos
                                desde tu historial.
                            </p>

                        </div>

                    </article>

                </div>

            </div>
        `;
    }
};