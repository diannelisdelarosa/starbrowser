<template>
  <div>
    <div class="row welcome">
      <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1>
          Welcome to Starbrowser
        </h1>
      </div>
      <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h4>
          What would you like to see?
        </h4>
      </div>
    </div>

    <div id="cuerpo-principal">
      <section id="tarjetas-info">
        <div class="tarjeta-info">
          <div class="img-container">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="0"
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
              class="slider"
            >
              <b-carousel-slide
                img-src="~/assets/landingimg/imagen3.jpg"
              ></b-carousel-slide>
              <b-carousel-slide img-src="~/assets/landingimg/imagen1.jpg">
              </b-carousel-slide>
              <b-carousel-slide
                img-src="~/assets/landingimg/imagen2.jpg"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="css" scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.h3 {
  font-size: 1.75rem;
  font-weight: 300;
}

#tarjetas-info .tarjeta-info {
  /* margin-bottom: 2rem; */
  position: relative;
  margin-top: -1rem;
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

#tarjetas-info .tarjeta-info > div div.img-container {
  width: inherit;
  /* padding: 0rem 1rem; */
  position: relative;
  right: 2rem;
  top: -2rem;
}

.slider {
  width: 106.2%;
  left: -2rem;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.welcome {
  position: absolute;
  z-index: 100;
  color: white;
  right: 3rem;
  top: 10rem;
}

@media screen and (max-width: 991px) {
  .slider {
    width: 123%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  .welcome {
    color: gray;
    top: 28rem;
    left: 3rem;
  }
}
</style>
