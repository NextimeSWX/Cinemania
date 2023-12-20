<template>
  <div class="movie--card" v-if="info_movie">
    <div class="movie--content">
      <div class="movie--image">
        <img :src="info_movie.affiche" :alt="info_movie.nom" width="200" height="280" />
      </div>
      <div class="movie-information">
        <h2 @click="$emit('openAffiche', info_movie)">{{ truncateText(info_movie.nom, 35) || 'Titre non disponible' }}</h2>

        <div class="separator"></div>
        <div class="bottom">
          <p class="up">{{ truncateText(info_movie.date, 25) || 'Date non disponible' }} / {{ info_movie.temps || 'Durée non disponible' }}
            / {{ truncateText(info_movie.type, 25) || 'Type non disponible' }}</p>
          <p>De : {{ truncateText(info_movie.realisateur, 40) || 'Réalisateur non disponible' }}</p>
          <p>Avec : {{ truncateText(info_movie.acteur, 40) || 'Acteur non disponible' }}</p>
          <h3>{{ truncateText(info_movie.description, 150) || 'Déscription non disponible' }}</h3>
          <h3 class="note">PRESSE : {{ info_movie.note_presse || 'N/A' }} | SPECTATEURS : {{ info_movie.note_spectateurs
            || 'N/A' }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    info_movie: Object
  },
  methods: {
    truncateText(text, length) {
      if (text && text.length > length) {
        return text.slice(0, length) + "...";
      }
      return text;
    },
  },
};
</script>

<style>
p {
  font-size: 12px;
}

h2 {
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 2px;
  margin-top: 10px;
  font-family: 'Raleway', sans-serif;
}

h3 {
  font-size: 13px;
}

.movie--card {
  border: 2px solid #d44e00;
  background-color: white;
  width: 500px;
  height: 280px;
  margin: 15px;
}

.movie--content {
  display: flex;
}

.movie--image {
  margin: 0;
  margin-right: 15px;
  border-right: 1px solid #d44e00;
  width: 200px;
  height: 280px;
}

.movie--information {
  display: block;
}

.separator {
  width: 75px;
  border-bottom: 2px solid rgb(40, 40, 40);
  ;
  margin-bottom: 20px;
}

.up {
  font-weight: bold;
}

.note {
  font-size: 15px;
  text-align: center;
  background-color: #d44e00;
  border-radius: 20px;
  padding: 5px;
  color: white;
}

.bottom {
  padding-right: 15px;
}
</style>
