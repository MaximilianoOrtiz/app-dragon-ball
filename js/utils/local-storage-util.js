const localStorageUtil = {

    STORAGE_KEY: 'dragonball-cart',

    getCart() {

        const cart = localStorage.getItem(
            this.STORAGE_KEY
        );

        return cart ? JSON.parse(cart) : [];
    },


    addProduct(product) {
        console.log('Adding product to cart:', product);

        const cart = this.getCart();

        const existingProduct = cart.find(
            item => item.id === product.id
        );

        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

            cart.push({
                id: product.id,
                name: product.name,
                image: product.image,
                category: product.category,
                price: product.price,
                quantity: 1
            });
        }

        this.saveCart(cart);
    },


    removeProduct(productId) {

        const cart = this.getCart();

        const updatedCart = cart.filter(
            item => item.id !== productId
        );

        this.saveCart(updatedCart);
    },


    updateQuantity(productId, quantity) {

        if (quantity <= 0) {
            this.removeProduct(productId);
            return;
        }

        const cart = this.getCart();

        const product = cart.find(
            item => item.id === productId
        );

        if (!product) return;

        product.quantity = quantity;

        this.saveCart(cart);
    },


    clearCart() {

        localStorage.removeItem(
            this.STORAGE_KEY
        );

        this.notifyUpdate();
    },


    getTotalItems() {

        return this.getCart().reduce(
            (total, item) =>
                total + item.quantity,
            0
        );
    },


    getSubtotal() {

        return this.getCart().reduce(
            (total, item) =>
                total + (
                    item.price *
                    item.quantity
                ),
            0
        );
    },


    saveCart(cart) {

        localStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(cart)
        );

        this.notifyUpdate();
    },


    notifyUpdate() {

        document.dispatchEvent(
            new CustomEvent('cart:updated')
        );
    }

};