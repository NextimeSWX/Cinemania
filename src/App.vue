<template>
  <div id="app">
    <app-header />

    <div class="modal" v-if="showModalPoster">
      <div class="modal-content">
        <movie-poster :data_moviePoster="data_moviePoster" />
        <button @click="OpenModalList">Liste</button>
      </div>
    </div>


    <div class="modal" v-if="showModalList">
      <div class="modal-content">
        <div class="title">
          <h1>Nos films</h1>
        </div>

        <movies-list :data_movies="data_movies" @openAffiche="OpenAffiche" />

        <button @click="resetStorage">Reset</button>

        <div class="bottom">
          <input class="searchbar" v-model="searchbar" type="text" placeholder="Rechercher un film...">
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
import MoviePoster from './components/MoviesPoster.vue';
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
    'movie-poster': MoviePoster,
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
    const data_moviePoster = ref();
    const selectedMovieName = ref('');
    const searchbar = ref('');
    const showDeleteSection = ref(false);
    const showModalList = ref(true);
    const showModalPoster = ref(false);


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
        data_movies.value = storedData.filter(movie => movie.nom && movie.nom.toLowerCase().includes(searchbar.value.toLowerCase()));
      } else {
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

    const OpenModalList = () => {
      showModalList.value = true;
      showModalPoster.value = false;
    };

    const OpenAffiche = (moviePosterData) => {
      showModalList.value = false;
      showModalPoster.value = true;
      data_moviePoster.value = moviePosterData;
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
    };

    watch(searchbar, handleSearchbarChange);

    return {
      data_movies,
      addMovie,
      selectedMovieName,
      showDeleteSection,
      deleteMovie,
      searchbar,
      resetStorage,
      showModalList,
      showModalPoster,
      OpenModalList,
      OpenAffiche,
      data_moviePoster,
    };
  }
}

</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,600&family=Mulish:ital,wght@1,900&family=Raleway:wght@500&display=swap');

* {
  background-color: rgb(255, 255, 255);

}

h1 {
  font-family: 'Kanit', sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  text-decoration: underline;
  color: rgb(41, 41, 41);
}

.title {
  text-align: center;

}

.bottom {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.searchbar {
  padding: 5px;
  border: solid 1px rgb(255, 255, 255);
  background-color: #d44e00;
  color: white;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  margin-right: 5px;
}

.searchbar:hover {
  border: solid 3px rgb(255, 255, 255);
  transition: 1s;
}
</style>
