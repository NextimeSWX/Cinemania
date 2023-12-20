<template>
  <div id="app">
    <app-header />
    <div class="title">
      <h1>Nos films</h1>
    </div>

    <movies-list :data_movies="data_movies" />

    <div class="bottom">
      <input v-model="searchbar" type="text" placeholder="Rechercher un film...">

      <button @click="resetStorage">Reset</button>

      <div class="button-add">
        <movie-form @add-movie="addMovie" />
      </div>

      <div class="button-del">
        <button @click="showDeleteSection = !showDeleteSection">Supprimer un film</button>

        <div v-if="showDeleteSection">
          <label for="movieName">Nom du film</label>
          <select id="movieName" v-model="selectedMovieName">
            <option v-for="movie in data_movies" :key="movie.nom" :value="movie.nom">{{ movie.nom }}</option>
          </select>
          <button type="button" @click="deleteMovie">Supprimer</button>
        </div>
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
import { onMounted, ref, watch } from 'vue';
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

    const data_movies = ref([]);
    const selectedMovieName = ref('');
    const showDeleteSection = ref(false);
    const searchbar = ref('');

    onMounted(() => {
      makeDataMovies();
    })

    const makeDataMovies = () => {
      const storedData = LocalStorageService.getData();

      if (!storedData || storedData.length === 0) {
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
        return;
      }

      if (searchbar.value.length > 0) {
        console.log("B");
        data_movies.value = storedData.filter(movie => movie.nom && movie.nom.toLowerCase().includes(searchbar.value.toLowerCase()));
      } else {
        console.log("A");
        data_movies.value = storedData.sort((a, b) => (a.nom && b.nom) ? a.nom.localeCompare(b.nom) : 0);
      }
    }

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
      )
      data_movies.value.push(new_movie);
      LocalStorageService.setData(data_movies.value);
    }

    const deleteMovie = () => {
      const movieToRemove = data_movies.value.find(movie => movie.nom === selectedMovieName.value);

      if (movieToRemove) {
        const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer ce film ?");

        if (confirmation) {
          const updatedMovies = data_movies.value.filter(movie => movie.nom !== selectedMovieName.value);
          LocalStorageService.setData(updatedMovies);
          data_movies.value = updatedMovies;
          console.log("Film supprimé :", selectedMovieName.value);
        } else {
          console.log("Suppression annulée");
        }
      } else {
        console.error("Film non trouvé :", selectedMovieName.value);
      }
    };

    const resetStorage = () => {
      const confirmation = window.confirm("Êtes-vous sûr de vouloir réinitialiser le stockage ?");

      if (confirmation) {
        LocalStorageService.resetStorage();
        data_movies.value = [];
        console.log("Stockage réinitialisé");
      } else {
        console.log("Réinitialisation annulée");
      }
    };

    const handleSearchbarChange = () => {
      makeDataMovies();
    }

    watch(searchbar, handleSearchbarChange);

    return {
      data_movies,
      addMovie,
      selectedMovieName,
      showDeleteSection,
      deleteMovie,
      searchbar,
      resetStorage,
    }
  }
}

</script>




<style></style>
