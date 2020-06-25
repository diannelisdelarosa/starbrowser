import axios from "axios";

const PeopleService = {};

PeopleService.getPeople = {
  async getPeople() { // Servicio para hacer la petición a la api "SWAPI" a través de axios
    try {
      const response = await axios.get("https://swapi.dev/api/people/?page=1");
      // En response.data es donde vienen los datos que necesito, asi que son los que devolveré al método getPeople que me llama desde el componente PeopleList
      return response.data;
    } catch (error) {
      const errorStatus = error.response.status;
      let errorMessage = "";

      if (errorStatus === 404) {
        errorMessage = "No se encontró al personaje";
      } else {
        errorMessage = "Ocurrió un error";
      }

      throw new Error(errorMessage);
    }
  },

  async getPersonById($url) { // Servicio para hacer la petición a la api "SWAPI" a través de axios y utilizando la url asociada al nombre que me mandan desde characters/_slug
    try {
      const response = await axios.get(`${$url}`); // sabiendo que la url será la del personaje que necesito, le digo a axios que lo utilice como url.
      //console.log("Response del servicio gePersonByID", response);

      // Como quiero mostrar cual es el planeta natal del personaje, debo separar el contenido del campo "homeworld" para sacar la id y utilizarla luego en la petición que me devolverá los datos del planeta.
      const homeWorld = response.data.homeworld.split("/");
      const idPlanet = homeWorld[homeWorld.length - 2];

      // console.log("el id Planet =>", idPlanet);

      // Hago petición al apartado de planetas de SWAPI para obtener los datos del planeta
      const personPlanet = await axios.get(
        "https://swapi.dev/api/planets/" + `${idPlanet}`
      );

      // console.log(
      //   "El planeta que le corresponde al personaje",
      //   personPlanet.data
      // );

      // Como con los planetas, quiero mostrar la especie a la que pertenece cada personaje, pero hay personajes que no tienen especie (como Darth Vader), así que hago un condicional para que no me de errores.
      let specieData = ""
      
      // Utilizo "length" para comprobar que tengo al menos un resultado, y luego separo como hice con los planetas, mediante "/".
      if (response.data.species.length) {
        const specie = response.data.species[0].split("/");
        const idSpecie = specie[specie.length - 2];
        const personSpecie = await axios.get(
          "https://swapi.dev/api/species/" + `${idSpecie}`
        );

        specieData = personSpecie.data


      } else {
        specieData = 'No hay specie para este character'
      }


      // Como un personaje puede aparecer en más de una pelicula, hago un array que me almacene las peliculas. Esto me permitirá utilizar el array "fimls" para sacar los datos de las películas.
      const films = [];

      // Para cada film que me encuentre, utilizo forEach para que me saque sus datos
      response.data.films.forEach(film => {
        const data = film
        films.push(data);
        
      });

     // console.log("los filmes en los que sale el personaje", films);

      // Como no puedo hacer peticiones con axios dentro de un forEach, utilizo loops normales dentro de async
      async function asynForEach(array, callback) {
        for (let index = 0; index < films.length; index++) {
          await callback(array[index], index, array)
        }
      }

      
      // Mediante el array "films", consigo utilizar axios para sacar la información de las peliculas.
      const filmsData = []

      const start = async () => {
        await asynForEach(films, async (url) => {
          const urlFiml = await axios.get(
            url
          );
         // console.log('Prueba de la url =>', urlFiml.data)
          filmsData.push(urlFiml.data)
        })
      }
      start()

      //console.log('la const fimlsData ==>', filmsData)

      // Para terminar, quiero almacenar todos los datos obtenidos en un objeto y asi poder devolverlo al método de characters/_slug
      const personData = {
        personFullData: response.data,
        personPlanet: personPlanet.data,
        personSpecieData: specieData,
        personFilms: filmsData
      }

      return personData
      
    } catch (error) {
      const errorStatus = error.response.status;
      let errorMessage = "";

      if (errorStatus === 404) {
        errorMessage = "No se encontró al personaje";
      } else {
        errorMessage = "Ocurrió un error";
      }

      throw new Error(errorMessage);
    }
  },

  async getMovies() { // Servicio para hacer la petición a la api "SWAPI" a través de axios
  try {
    const response = await axios.get("https://swapi.dev/api/films");
    // En response.data es donde vienen los datos que necesito, asi que son los que devolveré al método getPeople que me llama desde characters/index
    return response.data;
  } catch (error) {
    const errorStatus = error.response.status;
    let errorMessage = "";

    if (errorStatus === 404) {
      errorMessage = "No se encontró la pelicula";
    } else {
      errorMessage = "Ocurrió un error";
    }

    throw new Error(errorMessage);
  }
},

  async getMovieById($url) {
    try {

      const response = await axios.get(`${$url}`); // sabiendo que la url será la de la pelicula que necesito, le digo a axios que lo utilice como url.
      // console.log("Response del servicio getMovieById", response.data);

      return response.data

    } catch (error) {
      const errorStatus = error.response.status;
      let errorMessage = "";

      if (errorStatus === 404) {
        errorMessage = "No se encontró la pelicula";
      } else {
        errorMessage = "Ocurrió un error";
      }

      throw new Error(errorMessage);
    }
  }


};

export default PeopleService;
