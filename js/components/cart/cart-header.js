const CartHeader = {

    render(cart) {

        const totalItems = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        return `
            <header class="cart-header">

                <div class="cart-header__info">

                    <h1 class="cart-header__title">
                        Mi carrito
                    </h1>

                    <span class="cart-header__count">
                        ${totalItems}
                        ${totalItems === 1
                            ? 'producto'
                            : 'productos'
                        }
                    </span>

                </div>

                <button
                    class="cart-header__clear"
                    type="button"
                    data-cart-action="clear"
                >
                    Vaciar carrito
                </button>

            </header>
        `;
    }

};