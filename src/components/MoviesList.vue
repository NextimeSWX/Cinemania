<template>
  <div id="movies-list">
    <MoviesCard v-for="(movie, index) in data_movies" :key="index" :info_movie="movie" @openAffiche="SendOpenAffiche" />
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
  methods: {
    SendOpenAffiche(data_moviePoster) {
      this.$emit('openAffiche', data_moviePoster);
    },
  },
};
</script>

  
<style scoped>
#movies-list {
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 0;
}
</style>
  