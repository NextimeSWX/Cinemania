<template>
  <div class="movie--card" v-if="info_movie">
    <div class="movie--content">
      <div class="movie--image">
        <img :src="info_movie.affiche" :alt="info_movie.nom" width="200" height="280" />
      </div>
      <div class="movie-information">
        <h2>{{ info_movie.nom || 'Titre non disponible' }}</h2>
        <div class="separator"></div>
        <div class="bottom">
          <p class="up">{{ info_movie.date || 'Date non disponible' }} / {{ info_movie.temps || 'Durée non disponible' }}
            / {{ info_movie.type || 'Type non disponible' }}</p>
          <p>De : {{ info_movie.realisateur || 'Réalisateur non disponible' }}</p>
          <p>Avec : {{ info_movie.acteur || 'Acteur non disponible' }}</p>
          <h3>{{ truncateText(info_movie.description, 150) || 'Titre non disponible' }}</h3>
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
  text-transform: uppercase;
  margin-bottom: 2px;
  margin-top: 5px;
}

h3 {
  font-size: 13px;
}

.movie--card {
  border: 1px solid rgb(63, 63, 63);
  width: 500px;
  height: 280px;
  margin: 10px;
}

.movie--content {
  display: flex;
}

.movie--image {
  margin-right: 15px;
}

.movie--information {
  display: block;
}

.separator {
  width: 100px;
  border-bottom: 2px solid #333;
  margin-bottom: 20px;
}

.up {
  font-weight: bold;
}

.note {
  font-size: 16px;
  text-align: center;
  background-color: #d44e00;
  border-radius: 100px;
  color: white;
}

.bottom {
  padding-right: 15px;
}
</style>
