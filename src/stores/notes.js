import { defineStore } from "pinia";


export const useNotesStore = defineStore({
    id: "notes",
    state: () => ({
        notes: []
    }),
    actions: {
        addNote(note) {
            this.notes.push(note);
        },
        deleteNote(id) {
            this.notes = this.notes.filter((note) => note.id != id);
        }
    },
    getters: {
        howManyNotes: (state) => {
            return state.notes.length;
        }
    }
});