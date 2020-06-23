<template>
  <div class="container">
    <div class="row mt-3 mt-lg-0">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <form>
          <b-form-input
            class="form-control neu-search mb-5"
            v-model="search"
            size="lg"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <!-- <button class="btn my-2 my-sm-0 neu-search-button" type="submit">
        Search
      </button> -->
        </form>

        <div v-if="search === ''"></div>
        <div v-else>
          <div v-for="(person, key) in filteredList" :key="key" class="ml-lg-5">
            <div class="main-cards ml-lg-5">
              <div>
                <div class="img-container">
                  <img
                    :src="require(`~/assets/images/${person.name}.jpg`)"
                    alt=""
                  />
                </div>

                <span class="main-card__value">{{ person.name }}</span>
                <span class="main-card__date" @click="storeUrl(person.url)"
                  ><nuxt-link :to="{ path: `/characters/${person.name}` }"
                    ><h6>More info</h6>
                  </nuxt-link></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>

    <div v-if="persons.length">
      <div class="row">
        <div v-for="(person, key) in persons" :key="key" class="col-lg-4">
          <div class="main-cards">
            <div>
              <div class="img-container">
                <img
                  :src="require(`~/assets/images/${person.name}.jpg`)"
                  alt=""
                />
              </div>

              <span class="main-card__value">{{ person.name }}</span>
              <span class="main-card__date" @click="storeUrl(person.url)"
                ><nuxt-link :to="{ path: `/characters/${person.name}` }"
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
  data() {
    return {
      search: "",
      response: {},
      persons: []
    };
  },
  mounted() {
    // En el mounted llamo al método getPeople para poder sacar la lista de personajes de Star Wars.
    this.getPeople();
  },

  computed: {
    filteredList() {
      return this.persons.filter(person => {
        return person.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },

  methods: {
    async getPeople() {
      //Método para hacer las peticiones que me permita sacar la lista de personajes a través del servicio "StarBrowserService"
      try {
        const response = await StarBrowserService.getPeople.getPeople();

        // const response = await this.$axios.$get(
        //   "http://swapi.dev/api/people/?page=1"
        // );

        this.response = response; // En el data almaceno como objeto "{}" los datos que me devuelve la petición hecha.

        //console.log("Datos que me muestra el response", response);

        // Quiero almacenar en un array los valores que más me interesan de los personajes sacados de la lista.
        const persons = [];

        response.results.forEach(person => {
          // Utilizo forEach porque quiero manipular un array de objetos, que es "response".
          const data = {
            name: person.name,
            url: person.url,
            birth: person.birth_year,
            // specie: person.species,
            homeworld: person.homeworld
          };
          persons.push(data); // Utilizando array.push(data) estoy guardando los valores en el array "persons"
        });

        this.persons = persons; // En el data almaceno los datos del array persons para poder enseñarlos en la pantalla.
      } catch (error) {
        console.log(error);
      }
    },

    // Al principio iba a guardar en el store una id  que le asignaba yo misma, pero al final me di cuenta que lo que necesito realmente es la url para poder hacer las peticiones más tarde.

    // Con este método guardo en el store la url de cada personaje para poder utilizarlo más tarde en la vista individual de cada personaje cuando se recargue la página.
    storeUrl(urlPerson) {
      const urlPersonaje = urlPerson;

      console.log("la url del Personaje es =>", urlPersonaje);
      this.$store.commit("StarBrowserStore/setUrlPerson", urlPersonaje); // Commiteo en vuex para tener guardada la url asociada a cada personaje,
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
  position: relative;
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.5rem 0rem;
  bottom: -1.5rem;
  color: rgba(49, 69, 106, 0.9);
}

.main-cards > div span.main-card__date {
  position: relative;
  /* display: inline-block; */
  display: block;
  font-size: 1.5rem;
  font-weight: 350;
  /* margin: 0.5rem 0rem; */
  color: rgba(49, 69, 106, 0.5);
  bottom: -1rem;
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
