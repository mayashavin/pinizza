import { buildImageUrl } from "cloudinary-build-url";
import { defineStore } from "pinia";

export const usePizzas = defineStore({
    id: 'pizzas',
    state: () => ({
        pizzas: [],
        loading: false,
        error: null
    }),
    getters: {
        sortedPizzas: state => {
            return state.pizzas.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
        },
        pizzasGallery: state => state.pizzas.map(pizza => ({
            ...pizza,
            image: buildImageUrl(pizza.image, {
                cloud: {
                    cloudName: 'mayashavin'
                },
                transformations: {
                    resize: {
                        width: 300,
                        height: 300,
                        type: 'thumb',
                    }
                }

            })
        })),
    },
    actions: {
        async fetchPizzas() {
            this.loading = true;
            try {
                const response = await fetch("/.netlify/functions/pizzas");
                const pizzas = await response.json();
                this.pizzas = pizzas;
            }
            catch (error) {
                this.error= error;
            }
            finally {
                this.loading = false;
            }
        }
    }
});