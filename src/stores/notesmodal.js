import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: "new note modal",
    state: () => ({
        showModal: false
    }),
    actions: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    },
});