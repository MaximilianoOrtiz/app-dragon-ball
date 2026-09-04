const QuantitySelector = {

    render(product) {

        return `
            <div class="quantity-selector">

                <button
                    class="quantity-selector__button"
                    type="button"
                    data-cart-action="decrease"
                    data-product-id="${product.id}"
                    aria-label="Disminuir cantidad"
                >
                    −
                </button>

                <span class="quantity-selector__value">
                    ${product.quantity}
                </span>

                <button
                    class="quantity-selector__button"
                    type="button"
                    data-cart-action="increase"
                    data-product-id="${product.id}"
                    aria-label="Aumentar cantidad"
                >
                    +
                </button>

            </div>
        `;
    }

};