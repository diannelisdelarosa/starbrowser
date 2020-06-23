<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
    <form>
      <b-form-input
        class="form-control neu-search"
        size="lg"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <!-- <button class="btn my-2 my-sm-0 neu-search-button" type="submit">
        Search
      </button> -->
    </form>
    </div>
    <div class="col-lg-3"></div>
  </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="css" scoped>


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
