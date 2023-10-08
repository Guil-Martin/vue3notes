<script setup>
import Modal from "./components/Modal.vue";
import NoteContainer from "./components/NoteContainer.vue";
import { useModalStore } from "./stores/notesmodal";
import PencilPlus from 'vue-material-design-icons/PencilPlus.vue';

const modalStore = useModalStore()
</script>

<template>
  <main>
    <Modal />
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="modalStore.openModal"><PencilPlus /></button>
      </header>
      <NoteContainer />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

h1 {
  color: antiquewhite;
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  border: none;
  border-radius: 15px;
  padding: 15px;

  cursor: pointer;
  background: rgb(21, 20, 20);
  color: white;
  font-size: 20px;
}

</style>
