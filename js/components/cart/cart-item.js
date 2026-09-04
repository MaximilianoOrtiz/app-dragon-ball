const CartItem = {

    render(product) {

        const price = parseFloat(product.price) || 0;
        const quantity = parseInt(product.quantity, 10) || 0;

        const itemTotal = price * quantity;

        return `
            <article
                class="cart-item"
                data-product-id="${product.id}"
            >

                <img
                    class="cart-item__image"
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="cart-item__info">

                    <h2 class="cart-item__name">
                        ${product.name}
                    </h2>

                    <span class="cart-item__category">
                        ${product.category}
                    </span>

                    <strong class="cart-item__price">
                        $${price.toFixed(2)}
                    </strong>

                </div>

                <div class="cart-item__actions">

                    ${QuantitySelector.render(product)}

                    <strong class="cart-item__total">
                        $${itemTotal}
                    </strong>

                    <button
                        class="cart-item__remove"
                        type="button"
                        data-cart-action="remove"
                        data-product-id="${product.id}"
                    >
                        Eliminar
                    </button>

                </div>

            </article>
        `;
    }

};