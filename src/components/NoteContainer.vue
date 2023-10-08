<script setup>
import { useNotesStore } from "../stores/notes"
import FileRemove from 'vue-material-design-icons/FileRemove.vue';

const notesStore = useNotesStore()
</script>

<template>
  <div class="wrapper">
    <h2>Number of notes: {{ notesStore.howManyNotes }}</h2>
    <div class="cards-container">
      <div
      v-for="note in notesStore.notes"
      :key="note.id"
      class="card"
      :style="{ background: note.backgroundColor }"
      >
        <p class="main-text"> {{ note.content }} </p>
        <p class="date">{{ note.date.toLocaleDateString("fr-FR") }}</p>
        <button class="btn-delete" @click="notesStore.deleteNote(note.id)"><FileRemove /></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

h2 {
  align-self: center;
  color: wheat;
  padding: 10px;
}
.card {
  position: relative;
  width: 220px;
  height: 220px;
  background: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
}

.date {
  font-size: 12.5px;
}

.cards-container {
  border-radius: 10px;
  border: solid 4px rgb(237, 182, 44);
  padding: 6px;
  display: flex;
  background: rgba(100, 100, 100, 0.7);
  flex-wrap: wrap;
}

.btn-delete {
  background: rgb(208, 29, 29);
  color: aliceblue;
  border: none;
  border-radius: 5px;
  position: absolute;
  cursor: pointer;
  padding: 7px;
  top: -10px;
  right: -10px;
}
</style>