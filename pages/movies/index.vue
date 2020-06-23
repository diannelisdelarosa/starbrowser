<template>
  <div class="container">
    <MoviesList />
  </div>
</template>

<script>
// Importo el servicio StarBrowserService donde se llevan a cabo las peticiones.
import StarBrowserService from "@/services/StarBrowserService";
import MoviesList from '~/components/MoviesList.vue';


export default {
  components: {
    MoviesList,
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
