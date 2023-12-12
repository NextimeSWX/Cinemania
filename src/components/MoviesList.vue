<template>
    <div id="movies-list">
        <MoviesCard v-for="(movie, index) in data_movies" :key="index" :info_movie="movie" />
    </div>
</template>
  
<script>
import MoviesCard from '../components/MoviesCard.vue';

export default {
    components: {
        MoviesCard,
    },
    props: {
        data_movies: Array,
    },
};
</script>
  
<style>
#movies-list {
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}
</style>
  