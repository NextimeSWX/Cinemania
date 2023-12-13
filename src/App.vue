<template>
  <div id="app">
    <app-header />
    <div class="title">
      <h1>Nos films</h1>
    </div>
    <movies-list :data_movies="data_movies" />
    <movies-form @ajouter-film="ajouterFilm" />
    <app-footer />
  </div>
</template>

<script>
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
import MoviesList from './components/MoviesList.vue';
import MoviesForm from './components/MoviesForm.vue';
import { onMounted, ref } from 'vue';
import BDD from "../src/BDD";

export default {
  name: "App",
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'movies-list': MoviesList,
    'movies-form': MoviesForm
  },
  setup() {

    const ajouterFilm = (nouveauFilm) => {
      console.log('Ajouter film dans App :', nouveauFilm);
      data_movies.value.push(nouveauFilm);
    };

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

    let data_movies = ref([]);

    const makeDataMovies = () => {
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
    };


    onMounted(makeDataMovies);

    return {
      data_movies,
      ajouterFilm
    };
  }
};
</script>




<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,600&family=Raleway:wght@500&display=swap');

#app {
  padding: 0;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  color: rgb(40, 40, 40);
}

body {
  margin: 0;
}

.title {
  font-size: 40px;
  font-weight: bold;
  font-family: 'Kanit', sans-serif;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 0;
}

h2 {
  font-family: 'Raleway', sans-serif;
}

.title {
  text-align: center;
  border-bottom: 2px rgb(40, 40, 40);
}
</style>
