<template>
  <div class="container">
    <MovieInfo />
  </div>
</template>

<script>
import StarBrowserService from "@/services/StarBrowserService"; // Importo al servicio people
import MovieInfo from '~/components/MovieInfo.vue';


export default {
    components: {
    MovieInfo,
  },
  data() {

  },

  mounted() {
  
  },

  methods: {

  }
};
</script>

<style lang="css" scoped>


</style>
