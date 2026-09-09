const recentlyViewedUtil = {

    STORAGE_KEY: 'dragonball-recently-viewed',
    MAX_ITEMS: 10,

    getViews() {
        const views = localStorage.getItem(this.STORAGE_KEY);
        return views ? JSON.parse(views) : [];
    },

    addView(character) {
        let views = this.getViews();

        // Si ya estaba, lo sacamos de su posición actual para moverlo al frente
        views = views.filter(item => item.id !== character.id);

        views.unshift({
            id: character.id,
            name: character.name,
            race: character.race,
            image: character.image,
            price: character.price,
            quantity: character.quantity
        });

        // Recorta a los últimos MAX_ITEMS
        views = views.slice(0, this.MAX_ITEMS);

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(views));
    },

};