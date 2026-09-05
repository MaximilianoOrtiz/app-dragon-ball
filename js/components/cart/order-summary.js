const OrderSummary = {

    render(cart) {

        // Calcular el subtotal directamente desde el array recibido
        const subtotal = cart.reduce((acc, item) => {
            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantity, 10) || 0;
            return acc + (price * quantity);
        }, 0);

        const shipping = 0;
        const total = subtotal + shipping;

        return `
            <aside class="order-summary">
                <h2 class="order-summary__title">
                    Resumen del pedido
                </h2>
                <div class="order-summary__products">
                    ${cart.map(item => {
                        const price = parseFloat(item.price) || 0;
                        const quantity = parseInt(item.quantity, 10) || 0;
                        const itemTotal = price * quantity;

                        return `
                            <div class="summary-row">
                                <span>
                                    ${item.name}
                                    ×
                                    ${quantity}
                                </span>

                                <strong>
                                    $${itemTotal.toFixed(2)}
                                </strong>
                            </div>
                        `;
                    }).join('')}

                </div>

                <div class="order-summary__totals">
                    <div class="summary-row">
                        <span>
                            Subtotal
                        </span>

                        <strong>
                            $${subtotal.toFixed(2)}
                        </strong>
                    </div>

                    <div class="summary-row">
                        <span>
                            Envío
                        </span>
                        <strong>
                            Gratis
                        </strong>
                    </div>
                </div>

                <div class="order-summary__total">
                    <span>
                        Total
                    </span>
                    <strong>
                        $${total.toFixed(2)}
                    </strong>
                </div>
                <button
                    class="order-summary__checkout"
                    type="button"
                >
                    Confirmar pedido →
                </button>
            </aside>
        `;
    }

};