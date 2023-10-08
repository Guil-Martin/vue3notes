<script setup>
import { ref } from "vue";
import { useNotesStore } from "../stores/notes";
import { useModalStore } from "../stores/notesmodal";

const newNote = ref("");
const errorMsg = ref("");

const notesStore = useNotesStore()
const modalStore = useModalStore()

// Utils
const getRandomLightColor = () => {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
  if (newNote.value.length < 10) {
    return (errorMsg.value = "The note must be at least 10 characters long");
  }
  const newNoteObj = {
    id: Math.floor(Math.random() * 1000000),
    content: newNote.value,
    date: new Date(),
    backgroundColor: getRandomLightColor(),
  };
  notesStore.addNote(newNoteObj)

  newNote.value = "";
  errorMsg.value = "";
  modalStore.closeModal();
};
</script>

<template>
    <div v-if="modalStore.showModal" class="overlay">
      <div class="modal">
        <textarea
          placeholder="New note..."
          v-model.trim="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        >
        </textarea>
        <p v-if="errorMsg">{{ errorMsg }}</p>
        <button @click="addNote">Add note</button>
        <button class="close" @click="modalStore.closeModal">Close</button>
      </div>
    </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal p {
  color: rgb(193, 0, 0);
  margin-top: 7px;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
  background: rgb(193, 0, 0);
  margin-top: 7px;
}
</style>