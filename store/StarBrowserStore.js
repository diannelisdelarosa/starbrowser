export const state = () => ({
  // idPerson: {},
  urlPerson: {},
  namePerson: {},
  urlMovie: {},
  nameMovie: {}
});

export const getters = {
  // idPerson: state => {
  //   console.log(this.$store);
  //   return state.idPerson;
  // },
  urlPerson: state => {
    console.log(this.$store);
    return state.urlPerson;
  },
  namePerson: state => {
    console.log(this.$store);
    return state.namePerson;
  },
  urlMovie: state => {
    console.log(this.$store);
    return state.urlMovie;
  },
  nameMovie: state => {
    console.log(this.$store);
    return state.nameMovie;
  }
};

export const actions = {
  // setIdPerson({ commit, state }, selectedPerson) {
  //   console.log("prueba action para id", selectedPerson);
  //   commit("setIdPerson", selectedPerson);
  // },

  setUrlPerson({ commit, state }, selectedPerson) {
    console.log("prueba action para url", selectedPerson);
    commit("setUrlPerson", selectedPerson);
  },

  async getSluggedPerson({ commit }, slugado) {
    try {
      
      const nombre = slugado;

      const allPersons = await this.$axios.$get("https://swapi.dev/api/people/");

      const b = await allPersons.results.find(person => person.name === nombre);
      commit("setNamePerson", b.url);
    } catch (error) {
      throw error;
    }
  },

  setUrlMovie({ commit, state }, selectedMovie) {
    console.log("prueba action para url", selectedMovie);
    commit("setUrlMovie", selectedMovie);
  },

  async getSluggedMovie({ commit }, slugado) {
    try {
      
      const nombre = slugado;

      const allMovies = await this.$axios.$get("https://swapi.dev/api/films/");

      const b = await allMovies.results.find(movie => movie.title === nombre);
      commit("setNameMovie", b.url);
    } catch (error) {
      throw error;
    }
  }
};

export const mutations = {
  // setIdPerson(state, payload) {
  //   console.log("el idPerson", payload);
  //   state.idPerson = payload;
  // },

  setUrlPerson(state, payload) {
    // console.log("el urlPerson", payload);
    state.urlPerson = payload;
  },

  setNamePerson(state, payload) {
    // console.log("el namePerson", payload);
    state.namePerson = payload;
  },

  setUrlMovie(state, payload) {
    // console.log("el urlPerson", payload);
    state.urlMovie = payload;
  },

  setNameMovie(state, payload) {
    // console.log("el namePerson", payload);
    state.nameMovie = payload;
  }
};
