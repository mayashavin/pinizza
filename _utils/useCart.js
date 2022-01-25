import { buildImageUrl } from "cloudinary-build-url";
import { defineStore } from "pinia";

export const useCart = defineStore({
    id: 'cart',
    state: () => ({
        items: [],
        loading: false,
        error: null
    }),
    getters: {
        cartItems: state => state.items.map(item => ({
            ...item,
            image: buildImageUrl(item.image, {
                cloud: {
                    cloudName: 'mayashavin'
                }, 
                transformations: {
                    resize: {
                        width: 100,
                        height: 100,
                        type: 'thumb',
                    }
                }
            })
        })),
        cartTotal: state => state.items.reduce((total, item) => total + (+item.price), 0),
        cartCount: state => state.items.reduce((count, item) => count + item.quantity, 0),
    },
    actions: {
        addItem(item) {
            const existingItem = this.items.find(i => i.id === item.id);

            existingItem ? existingItem.quantity++ : this.items.push(item);
        },
        removeItem(item) {
            this.items = this.items.filter(i => i.id !== item.id);
        },
        clearCart() {
            this.items.length = 0;
        },
    }
});