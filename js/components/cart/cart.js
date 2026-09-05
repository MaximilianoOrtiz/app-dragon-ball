const Cart = {

    render(cart) {

        if (cart.length === 0) {

           return `
                <section class="cart cart--empty">
                    <header class="cart-empty__header">
                        <h1 class="cart-empty__title">Mi carrito</h1>
                        <p class="cart-empty__subtitle">Productos que seleccionaste para comprar.</p>
                    </header>
                    <div class="cart-empty__content">
                        <div class="cart-empty__icon" aria-hidden="true">!</div>

                        <h2 class="cart-empty__heading">Tu carrito está vacío</h2>

                        <p class="cart-empty__message">
                            Agregá productos desde el catálogo para comenzar tu compra.
                        </p>

                        <a href="./search.html" class="cart-empty__button">
                            Ver catálogo
                        </a>
                    </div>
                </section>
            `;
        }

        return `
            <section class="cart">
                ${CartHeader.render(cart)}

                <div class="cart__content">
                    <div class="cart__items">
                        ${cart
                            .map(product =>
                                CartItem.render(product)
                            )
                            .join('')
                        }
                    </div>
                    ${OrderSummary.render(cart)}
                </div>
            </section>
        `;
    }
};