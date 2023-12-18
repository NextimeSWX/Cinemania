<template>
  <div id="app">
    <app-header />
    <div class="title">
      <h1>Nos films</h1>
    </div>

    <div class="button-add">
      <movies-list :data_movies="data_movies" />
      <movie-form @add-movie="addMovie" />
    </div>

    <div class="button-del">
      <button @click="showDeleteSection = !showDeleteSection">Supprimer un film</button>

      <div v-if="showDeleteSection">
        <label for="movieName">Nom du film</label>
        <select id="movieName" v-model="selectedMovieName">
          <option v-for="movie in data_movies" :key="movie.nom" :value="movie.nom">{{ movie.nom }}</option>
        </select>
        <button type="submit" @click="deleteMovie">Supprimer</button>
      </div>
    </div>

    <app-footer />
  </div>
</template>

<script>
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
import MoviesList from './components/MoviesList.vue';
import MovieForm from './components/MoviesForm.vue';
import LocalStorageService from "../src/services/LocalStorageService";
import { onMounted, ref } from 'vue';
import BDD from "../src/BDD";

export default {
  name: "App",
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'movies-list': MoviesList,
    'movie-form': MovieForm,
  },
  setup() {
    class Movie {
      constructor(nom, date, temps, type, realisateur, acteur, note_presse, note_spectateurs, affiche, description) {
        this.nom = nom || '';
        this.date = date;
        this.temps = temps;
        this.type = type;
        this.realisateur = realisateur;
        this.acteur = acteur;
        this.note_presse = note_presse;
        this.note_spectateurs = note_spectateurs;
        this.affiche = affiche;
        this.description = description;
      }
    }

    let data_movies = ref(LocalStorageService.getData());
    let selectedMovieName = ref('');
    let showDeleteSection = ref(false);

    const makeDataMovies = () => {
      const storedData = LocalStorageService.getData();

      if (storedData && storedData.length > 0) {
        data_movies.value = storedData;
      } else {
        data_movies.value = [];

        for (const movie of BDD) {
          const new_movie = new Movie(
            movie.nom || '',
            movie.date,
            movie.temps,
            movie.type,
            movie.realisateur,
            movie.acteur,
            movie.note_presse,
            movie.note_spectateurs,
            movie.affiche,
            movie.description
          );
          data_movies.value.push(new_movie);
        }
        LocalStorageService.setData(data_movies.value);
      }
    };

    const addMovie = (newMovie) => {
      const new_movie = new Movie(
        newMovie.nom || '',
        newMovie.date,
        newMovie.temps,
        newMovie.type,
        newMovie.realisateur,
        newMovie.acteur,
        newMovie.note_presse,
        newMovie.note_spectateurs,
        newMovie.affiche,
        newMovie.description
      );
      data_movies.value.push(new_movie);
      LocalStorageService.setData(data_movies.value);
    };

    const deleteMovie = () => {
      const movieToRemove = data_movies.value.find(movie => movie.nom === selectedMovieName.value);

      if (movieToRemove) {
        const updatedMovies = data_movies.value.filter(movie => movie.nom !== selectedMovieName.value);
        LocalStorageService.setData(updatedMovies);
        data_movies.value = updatedMovies;
        console.log("Film supprimé :", selectedMovieName.value);
      } else {
        console.error("Film non trouvé :", selectedMovieName.value);
      }
    };

    onMounted(makeDataMovies);

    return {
      data_movies,
      addMovie,
      selectedMovieName,
      showDeleteSection,
      deleteMovie,
    };
  }
};
</script>

<style></style>
