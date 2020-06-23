<template>
  <div class="container" id="cuerpo-principal">
    <section id="tarjetas-info">
      <div class="tarjeta-info">
        <div v-if="response.personFullData && response.personSpecieData">
          <div class="img-container">
            <img
              :src="
                require(`~/assets/images/${response.personFullData.name}.jpg`)
              "
              alt=""
            />
          </div>
          <span class="tarjeta-info__info-tarjeta">Character info</span>
          <div class="person_info">
            <div class="info_tag">
              <span>Name</span>
            </div>
            <div class="info_resut">
              <span>{{ response.personFullData.name }}</span>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Specie</span>
            </div>
            <div class="info_resut">
              <span>{{ response.personSpecieData.name }}</span>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Gender</span>
            </div>
            <div class="info_resut">
              <span>{{ response.personFullData.gender }}</span>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Birth Year</span>
            </div>
            <div class="info_resut">
              <span>{{ response.personFullData.birth_year }}</span>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Height</span>
            </div>
            <div class="info_resut">
              <span>{{ response.personFullData.height }}</span>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Mass</span>
            </div>
            <div class="info_resut">
              <span>{{ response.personFullData.mass }}</span>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Cargando...</p>
        </div>
      </div>

      <div class="tarjeta-info">
        <div v-if="response.personFullData && response.personSpecieData">
          <!-- <span class="tarjeta-info__icono-tarjeta">💧</span> -->
          <span class="tarjeta-info__info-tarjeta"
            >Appears in the following movies</span
          >
          <div class="movie_info">
            <div v-for="(movie, key) in response.personFilms" :key="key">
              <div class="listado" @click="storeUrl(movie.url)">
                <nuxt-link :to="{ path: `/movies/${movie.title}` }">
                  <div class="person_info">
                    <div class="info_tag">
                      <span>{{ movie.title }}</span>
                    </div>
                    <div class="info_resut">
                      <span>{{ movie.release_date }}</span>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import StarBrowserService from "@/services/StarBrowserService"; // Importo al servicio people

export default {
  data() {
    return {
      character_router: this.$route.params.slug,
      // idPerson: null,
      urlPerson: null,
      response: {}
    };
  },

  mounted: async function() {
    console.log(
      "el router para saber el nombre del personaje",
      this.$route.params.slug
    );

    // Como en characters/index he utilizado "nuxt-link" para que me lleve a esta vista poniendo como slug el nombre del personaje, utilizo this.$route para que me almacene el nombre.
    const slugado = this.$route.params.slug;

    // Guardo en el data la url del personaje que tengo almacenada en Vuex.
    this.urlPerson = this.$store.state.StarBrowserStore.urlPerson;
    // console.log("el urlPerson del _slug", this.urlPerson);

    // Le mando al vuex el slugado para su método getSluggedPerson, en el que buscará las coincidencias para devolverme los datos que necesito.
    await this.$store.dispatch("StarBrowserStore/getSluggedPerson", slugado);

    console.log(
      "Prueba de de que estoy sacando la url asociada al nombre del personaje",
      this.$store.state.StarBrowserStore.namePerson
    );

    // Una vez ya tengo claro cual es la url asociada al nombre del personaje elegido, en el mounted llamo al método que me dará los valores del personaje asociado.
    this.getInfo(this.$store.state.StarBrowserStore.namePerson);
  },

  methods: {
    async getInfo(url) {
      //Método para sacar los datos del personaje a través de la url asociada a su nombre.
      try {
        const response = await StarBrowserService.getPeople.getPersonById(url);
        // const response = await this.$axios.$get(
        //   "http://swapi.dev/api/people/"+`${id}`
        // );
        this.response = response; // En el data almaceno como objeto "{}"" los datos que me devuelve la petición hecha.

        // return persons;
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
#cuerpo-principal #tarjetas-info {
  /* margin-top: 10%; */
  flex: 1;
}

#tarjetas-info .tarjeta-info {
  /* margin-bottom: 2rem; */
  position: relative;
  padding: 3%;
  animation: footer 1.5s ease-in forwards;
  animation-iteration-count: 1;
}

#tarjetas-info .tarjeta-info > div {
  position: relative;
  /* height: 8.5rem; */
  border: 1px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.01);
  border-radius: 25px;
  /* padding: 1.5rem; */
  padding: 2rem;
  box-shadow: 8px 12px 16px 6px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
}

#tarjetas-info .tarjeta-info > div span.tarjeta-info__icono-tarjeta {
  display: inline-block;
  width: 120px;
  /* padding: 0.5rem; */
  /* margin-left: 4%; */
  padding: 1%;
  /* height: 120px; */
  text-align: center;
  line-height: 120px;
  font-size: 50px;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.02);
  background-color: rgba(0, 0, 0, 0.01);
  color: rgba(49, 69, 106, 0.6);
  box-shadow: 8px 7px 16px 3px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
}

#tarjetas-info .tarjeta-info > div span.tarjeta-info__info-tarjeta {
  display: inline-block;
  font-size: 2rem;
  font-weight: 400;
  color: rgba(49, 69, 106, 1);
}

#tarjetas-info .tarjeta-info > div span.tarjeta-info__info-tarjeta span {
  display: block;
  font-weight: 400;
  margin-top: -0.5rem;
  color: rgba(49, 69, 106, 0.5);
}

.person_info {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}

.info_tag {
  font-size: larger;
  font-weight: 500;
  cursor: pointer;
}

.info_result {
  font-size: larger;
  cursor: pointer;
}

.movie_link:hover {
  cursor: pointer;
  text-decoration: none;
}

#tarjetas-info .tarjeta-info > div div.img-container {
  width: inherit;
  /* padding: 0rem 1rem; */
  position: relative;
  right: 2rem;
  top: -2rem;
}

#tarjetas-info .tarjeta-info > div div.img-container img {
  width: 107%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

@media screen and (max-width: 991px) {
#tarjetas-info .tarjeta-info > div div.img-container img {
  width: 128%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
  
}
</style>
