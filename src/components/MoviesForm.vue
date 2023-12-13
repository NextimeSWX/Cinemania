<template>
  <div>
    <button @click="ouvrirModal">Ajouter un film</button>
    <div v-if="showModal">
      <form @submit.prevent="ajouterFilm">

        <label for="nom">Nom du film :</label>
        <input id="nom" v-model="nouveauFilm.nom" required />

        <label for="date">Date de sortie :</label>
        <input id="date" v-model="nouveauFilm.date" required />

        <label for="temps">Durée :</label>
        <input id="temps" v-model="nouveauFilm.temps" required />

        <label for="type">Catégorie :</label>
        <input id="type" v-model="nouveauFilm.type" required />

        <label for="realisateur">Réalisateur :</label>
        <input id="realisateur" v-model="nouveauFilm.realisateur" required />

        <label for="acteur">Acteurs :</label>
        <input id="acteur" v-model="nouveauFilm.acteur" required />

        <label for="note_presse">Note presse :</label>
        <input id="note_presse" v-model="nouveauFilm.note_presse" required />

        <label for="note_spectateurs">Note spectateurs :</label>
        <input id="note_spectateurs" v-model="nouveauFilm.note_spectateurs" required />

        <label for="affiche">Affiche :</label>
        <input id="affiche" v-model="nouveauFilm.affiche" required />

        <label for="description">Description :</label>
        <textarea id="description" v-model="nouveauFilm.description" required></textarea>


        <button type="submit">Ajouter</button>
        <button @click="fermerModal">Fermer</button>
      </form>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      showModal: false,
      nouveauFilm: {
        nom: '',
        date: '',
        temps: '',
        type: '',
        realisateur: '',
        acteur: '',
        note_presse: 0,
        note_spectateurs: 0,
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
    },
    ajouterFilm() {
      this.$emit('ajouterFilm', this.nouveauFilm);
      this.nouveauFilm = {
        nom: '',
        date: '',
        temps: '',
        type: '',
        realisateur: '',
        acteur: '',
        note_presse: 0,
        note_spectateurs: 0,
        affiche: '',
        description: '',
      };
      this.showModal = false;
    },
  },
};
</script>
  


<style scoped></style>
  