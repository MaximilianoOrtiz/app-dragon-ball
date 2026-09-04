const Card = {

    // Crea y devuelve el elemento DOM de una tarjeta
    // (no la inserta en el DOM).
    createCard(item) {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("card");

        tarjeta.dataset.id = item.id;

        tarjeta.innerHTML = `

            <a
                href="details.html?id=${item.id}"
                class="card__link"
            >

                <div class="card__media">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                    >

                </div>

                <div class="card__body">

                    <p class="card__tags">
                        ${item.race} · ${item.gender}
                    </p>

                    <h3 class="card__title">
                        ${item.name}
                    </h3>

                    <p class="card__price">
                        $${item.price}
                    </p>

                </div>

            </a>

            <button
                type="button"
                class="card__add-cart"
                data-cart-action="add"
                data-product-id="${item.id}"
            >
                Agregar al carrito
            </button>

        `;

        // Guardamos el producto de la API
        // dentro de la tarjeta.
        tarjeta._product = item;

        return tarjeta;
    },


    renderList(items, selectorContenedor) {

        const contenedor =
            document.querySelector(selectorContenedor);

        if (!contenedor) return;

        contenedor.innerHTML = "";

        if (!items || items.length === 0) {

            contenedor.innerHTML = `
                <p class="empty-state">
                    No se encontraron resultados.
                </p>
            `;

            return;
        }

        items.forEach(item => {

            contenedor.appendChild(
                Card.createCard(item)
            );

        });

        Card.bindEvents(contenedor);
    },


    bindEvents(contenedor) {

        contenedor.addEventListener("click", event => {

            const button =
                event.target.closest(
                    '[data-cart-action="add"]'
                );

            if (!button) return;

            event.preventDefault();

            const card =
                button.closest(".card");

            if (!card) return;

            const product =
                card._product;

            if (!product) return;

            // Agregar producto al carrito
            localStorageUtil.addProduct(product);

            // Feedback visual
            button.textContent = "✓ Agregado";

            setTimeout(() => {

                button.textContent =
                    "Agregar al carrito";

            }, 1000);

        });
    }

};