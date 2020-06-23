<template>
  <div class="container">
    <PersonInfo />
  </div>
</template>

<script>
import StarBrowserService from "@/services/StarBrowserService"; // Importo al servicio people
import PersonInfo from "~/components/PersonInfo.vue";

export default {
  components: {
    PersonInfo
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>
