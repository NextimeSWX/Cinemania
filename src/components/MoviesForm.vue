<template>
  <div>
    <button @click="ouvrirModal">Ajouter un film</button>
    <div v-if="showModal">
      <form @submit.prevent="addMovie">

        <label for="nom">Nom:</label>
        <input v-model="newMovie.nom" required />

        <label for="date">Date de sortie:</label>
        <input v-model="newMovie.date" required />

        <label for="temps">Durée:</label>
        <input v-model="newMovie.temps" required />

        <label for="type">Catégorie:</label>
        <input v-model="newMovie.type" required />

        <label for="realisateur">De:</label>
        <input v-model="newMovie.realisateur" required />

        <label for="acteur">Avec:</label>
        <input v-model="newMovie.acteur" required />

        <label for="note_presse">Note presse:</label>
        <input v-model="newMovie.note_presse" required />

        <label for="note_spectateurs">Note spectateurs:</label>
        <input v-model="newMovie.note_spectateurs" required />

        <label for="affiche">Affiche:</label>
        <input v-model="newMovie.affiche" required />

        <label for="description">Description:</label>
        <textarea v-model="newMovie.description" required></textarea>


        <button type="submit">Ajouter</button>
      </form>
      <button @click="fermerModal">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      newMovie: {
        nom: '',
        date: '',
        temps: '',
        type: '',
        realisateur: '',
        acteur: '',
        note_presse: '',
        note_spectateurs: '',
        affiche: '',
        description: '',
      },
    };
  },
  methods: {
    ouvrirModal() {
      this.showModal = true;
    },
    fermerModal() {
      this.showModal = false;
      this.newMovie = {
        nom: '',
        date: '',
        temps: '',
        type: '',
        realisateur: '',
        acteur: '',
        note_presse: '',
        note_spectateurs: '',
        affiche: '',
        description: '',
      };
    },
    addMovie() {
      this.$emit('add-movie', { ...this.newMovie });
      this.fermerModal();
    },
  },
};
</script>

<style scoped>
</style>
