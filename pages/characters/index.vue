<template>
  <div class="container">
    <PeopleList/>
  </div>
</template>

<script>
// Importo el servicio StarBrowserService donde se llevan a cabo las peticiones.
import StarBrowserService from "@/services/StarBrowserService"; 
import PeopleList from '~/components/PeopleList.vue';

export default {
   components: {
     PeopleList,
  },
  data() {
    return {
  
    };
  },
  mounted() {

  },

  methods: {
  }
};
</script>
