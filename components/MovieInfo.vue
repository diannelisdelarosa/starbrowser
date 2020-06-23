<template>
  <div class="container" id="cuerpo-principal">
    <section id="tarjetas-info">
      <div class="tarjeta-info">
        <div v-if="response && response.title">
          <!-- <div class="img-container">
            <img
              :src="
                require(`~/assets/images/${response.title}.jpg`)
              "
              alt=""
            />
          </div> -->
          <span class="tarjeta-info__info-tarjeta">Movie info</span>
          <div class="person_info">
            <div class="info_tag">
              <span>Title</span>
            </div>
            <div class="info_resut">
              <span>{{ response.title }}</span>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Poster</span>
            </div>
            <div class="info_resut">
              <span v-b-modal.modal-center>See poster</span>

              <b-modal id="modal-center" class="neu-modal" hide-header hide-footer size="md">
                <p><img
              :src="
                require(`~/assets/images/${response.title}.jpg`)
              "
              alt=""
            /></p>
              </b-modal>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Episode</span>
            </div>
            <div class="info_resut">
              <span>{{ response.episode_id }}</span>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Director</span>
            </div>
            <div class="info_resut">
              <span>{{ response.director }}</span>
            </div>
          </div>
          <div class="person_info">
            <div class="info_tag">
              <span>Producer</span>
            </div>
            <div class="info_resut">
              <span>{{ response.producer }}</span>
            </div>
          </div>
          <div class="opening">
            <div class="info_tag">
              <span>Opening</span>
            </div>
            <div class="info_resut">
              <span>{{ response.opening_crawl }}</span>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Cargando...</p>
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
      urlMovie: null,
      response: {}
    };
  },

  mounted: async function() {
    console.log(
      "el router para saber el nombre de la pelicula",
      this.$route.params.slug
    );

    // Como en characters/index he utilizado "nuxt-link" para que me lleve a esta vista poniendo como slug el nombre del personaje, utilizo this.$route para que me almacene el nombre.
    const slugado = this.$route.params.slug;

    // Guardo en el data la url del personaje que tengo almacenada en Vuex.
    this.urlMovie = this.$store.state.StarBrowserStore.urlMovie;
    console.log(
      "el urlMovie del _slug",
      this.$store.state.StarBrowserStore.urlMovie
    );

    // Le mando al vuex el slugado para su método getSluggedPerson, en el que buscará las coincidencias para devolverme los datos que necesito.
    await this.$store.dispatch("StarBrowserStore/getSluggedMovie", slugado);

    console.log(
      "Prueba de de que estoy sacando la url asociada a la Pelicula",
      this.$store.state.StarBrowserStore.nameMovie
    );

    // Una vez ya tengo claro cual es la url asociada al nombre del personaje elegido, en el mounted llamo al método que me dará los valores del personaje asociado.
    this.getInfo(this.$store.state.StarBrowserStore.nameMovie);
  },

  methods: {
    async getInfo(url) {
      //Método para sacar los datos del personaje a través de la url asociada a su nombre.
      try {
        const response = await StarBrowserService.getPeople.getMovieById(url);
        // const response = await this.$axios.$get(
        //   "http://swapi.dev/api/people/"+`${id}`
        // );
        this.response = response; // En el data almaceno como objeto "{}"" los datos que me devuelve la petición hecha.

        // return persons;
      } catch (error) {
        console.log(error);
      }
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

.opening {
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
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

img {
    width: 100%;

}


</style>
