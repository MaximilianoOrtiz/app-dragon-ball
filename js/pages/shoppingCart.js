const ShoppingCart = {

    appShoppingCart: null,


    init() {

        this.appShoppingCart =
            document.querySelector('#site-shopping-cart');

        if (!this.appShoppingCart) return;

        this.render();

        this.bindEvents();

        document.addEventListener(
            'cart:updated',
            () => this.render()
        );
    },


    render() {

        const cart =
            localStorageUtil.getCart();

        this.appShoppingCart.innerHTML =
            Cart.render(cart);
    },


    bindEvents() {

        this.appShoppingCart.addEventListener(
            'click',
            event => {

                const button =
                    event.target.closest(
                        '[data-cart-action]'
                    );

                if (!button) return;

                const action =
                    button.dataset.cartAction;

                const productId =
                    Number(
                        button.dataset.productId
                    );


                switch (action) {

                    case 'increase':
                        this.increaseQuantity(
                            productId
                        );
                        break;

                    case 'decrease':
                        this.decreaseQuantity(
                            productId
                        );
                        break;

                    case 'remove':
                        localStorageUtil.removeProduct(
                            productId
                        );
                        break;

                    case 'clear':
                        localStorageUtil.clearCart();
                        break;
                }
            }
        );
    },


    increaseQuantity(productId) {

        const cart =
            localStorageUtil.getCart();

        const product =
            cart.find(
                item => item.id === productId
            );

        if (!product) return;

        localStorageUtil.updateQuantity(
            productId,
            product.quantity + 1
        );
    },


    decreaseQuantity(productId) {

        const cart =
            localStorageUtil.getCart();

        const product =
            cart.find(
                item => item.id === productId
            );

        if (!product) return;

        localStorageUtil.updateQuantity(
            productId,
            product.quantity - 1
        );
    }

};

ShoppingCart.init();