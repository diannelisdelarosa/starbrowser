<template>
  <div class="container">
    <div v-if="response">
      <div class="row">
        <div v-for="(movie, key) in response" :key="key" class="col-lg-4">
          <div class="main-cards">
            <div>
              <!-- <div class="img-container">
                <img
                  :src="require(`~/assets/images/${movie.title}.jpg`)"
                  alt=""
                />
              </div> -->

              <span class="main-card__value">{{ movie.title }}</span>
              <span class="main-card__date" @click="storeUrl(movie.url)"
                ><nuxt-link :to="{ path: `/movies/${movie.title}` }"
                  ><h6>More info</h6>
                </nuxt-link></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script>
// Importo el servicio StarBrowserService donde se llevan a cabo las peticiones.
import StarBrowserService from "@/services/StarBrowserService";

export default {
  components: {},
  data() {
    return {
      response: []
    };
  },
  mounted() {
    this.getMovies();
  },

  methods: {
    async getMovies() {
      //Método para hacer las peticiones que me permita sacar la lista de personajes a través del servicio "StarBrowserService"
      try {
        const response = await StarBrowserService.getPeople.getMovies();

        // const response = await this.$axios.$get(
        //   "http://swapi.dev/api/people/?page=1"
        // );

        this.response = response.results; // En el data almaceno como objeto "{}"" los datos que me devuelve la petición hecha.

        //console.log("Datos que me muestra el response", response);
      } catch (error) {
        console.log(error);
      }
    },

        storeUrl(urlMovie) {
      const urlPelicula = urlMovie;

      console.log("la url de la pelicula es =>", urlPelicula);
      this.$store.commit("StarBrowserStore/setUrlMovie", urlPelicula); // Commiteo en vuex para tener guardada la url asociada a cada personaje,
    }
  }
};
</script>

<style lang="css" scoped>
.main-cards {
  padding: 3% 0%;
  position: relative;
  height: -webkit-fill-available;
}

.main-cards > div {
  position: relative;
  width: 18rem;
  height: 15rem;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.01);
  border-radius: 45px;
  padding: 3rem 2.5rem;
  margin: 5% 5%;
  /* flex: none; */
  box-shadow: 8px 12px 16px 6px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
}

.main-cards > div div.img-container {
  width: inherit;
  /* padding: 0rem 1rem; */
  position: relative;
  right: 2.5rem;
  top: -3rem;
}

.main-cards > div div.img-container img {
  width: 100%;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
}
.main-cards > div span.main-card__info span {
  display: block;
  font-weight: 400;
  margin-top: -0.5rem;
  color: rgba(49, 69, 106, 0.5);
}

.main-cards > div span.main-card__value {
  position: absolute;
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.5rem 0rem;
  /* bottom: 1.5rem; */
  top: 1rem;
  color: rgba(49, 69, 106, 0.9);
}

.main-cards > div span.main-card__date {
  position: absolute;
  /* display: inline-block; */
  display: block;
  font-size: 1.5rem;
  font-weight: 350;
  /* margin: 0.5rem 0rem; */
  color: rgba(49, 69, 106, 0.5);
  top: 12rem;
  /* bottom: -1rem; */
  /* left: 0.5rem; */
}

.neu-search {
  background-color: inherit;
  border-radius: 10px;
  box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
    inset -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.neu-search-button {
  color: #fff;
  font-weight: 500;
  background-color: #5a84a2;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.neu-search-button:active {
  transform: scale(0.98);
  -webkit-transform: scale(0.98);
  -ms-transform: scale(0.98);
  -moz-transform: scale(0.98);
  box-shadow: inset -2px -2px 2px rgba(255, 255, 255, 1),
    inset -2px -2px 2px rgba(255, 255, 255, 0.5),
    inset 1px 1px 2px rgba(255, 255, 255, 0.1),
    inset 1px 1px 2px rgba(0, 0, 0, 0.15);
}
</style>
