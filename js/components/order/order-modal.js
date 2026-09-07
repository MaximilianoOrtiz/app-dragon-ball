const OrderModal = {

    render(selector) {

        const container =
            document.querySelector(selector);

        if (!container) return;

        container.innerHTML = `
           <div class="order-modal" id="order-modal" aria-hidden="true">
                <div class="order-modal__overlay" data-modal-close></div>

                <section class="order-modal__content" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">

                    <button class="order-modal__close" type="button" aria-label="Cerrar" data-modal-close>
                        ×
                    </button>

                    <header class="order-modal__header">
                        <h2 class="order-modal__title" id="order-modal-title">
                            Datos de envío
                        </h2>
                        <p class="order-modal__description">
                            Completá tus datos para confirmar el pedido.
                        </p>
                    </header>

                    <form class="order-form" id="order-form">
                        <div class="order-form__field">
                            <label class="order-form__label" for="order-name">
                                Nombre
                            </label>

                            <input class="order-form__input" id="order-name" name="name" type="text" placeholder="Ingresá tu nombre"
                                autocomplete="given-name">
                            <span class="order-form__error" data-error="name"></span>
                        </div>

                        <div class="order-form__field">
                            <label class="order-form__label" for="order-lastname">
                                Apellido
                            </label>

                            <input class="order-form__input" id="order-lastname" name="lastname" type="text"
                                placeholder="Ingresá tu apellido" autocomplete="family-name">

                            <span class="order-form__error" data-error="lastname"></span>
                        </div>

                        <div class="order-form__field">
                            <label class="order-form__label" for="order-address">
                                Dirección
                            </label>

                            <input class="order-form__input" id="order-address" name="address" type="text"
                                placeholder="Calle y número" autocomplete="street-address">

                            <span class="order-form__error" data-error="address"></span>
                        </div>

                        <div class="order-form__field">
                            <label class="order-form__label" for="order-phone">
                                Celular
                            </label>

                            <input class="order-form__input" id="order-phone" name="phone" type="text"
                                placeholder="Numero de celular" autocomplete="street-address">

                            <span class="order-form__error" data-error="address"></span>
                        </div>

                        <div class="order-form__field">
                            <label class="order-form__label" for="order-phone">
                                Aclacraciones
                            </label>

                            <input class="order-form__input" id="order-remarks" name="remarks" type="textarea"
                                placeholder="Datos adicionales" autocomplete="street-address">

                            <span class="order-form__error" data-error="address"></span>
                        </div>


                        <div class="order-form__actions">
                            <button class="order-form__cancel" type="button" data-modal-close>
                                Cancelar
                            </button>

                            <button class="order-form__submit" type="submit">
                                Confirmar pedido →
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        `;

        this.bindEvents();
    },


    bindEvents() {
        const modal =
            document.querySelector("#order-modal");

        if (!modal) return;

        modal
            .querySelectorAll("[data-modal-close]")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => this.close()
                );
            });

        const form =
            modal.querySelector("#order-form");

        if (!form) return;

        form.addEventListener(
            "submit",
            (event) => this.handleSubmit(event)
        );

        document.addEventListener(
            "order:checkout",
            () => this.open()
        );
    },

    open() {
        const modal =
            document.querySelector("#order-modal");

        if (!modal) return;

        modal.classList.add("order-modal--open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );
        document.body.classList.add(
            "modal-open"
        );
    },

    close() {
        const modal =
            document.querySelector("#order-modal");

        if (!modal) return;

        modal.classList.remove(
            "order-modal--open"
        );

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    },

    handleSubmit(event) {

        event.preventDefault();
        // La validación la agregamos en la PARTE 2
    }

};