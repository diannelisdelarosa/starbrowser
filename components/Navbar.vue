<template>
  <div class>
    <!-- <div class="container"> -->
    <div>
      <b-navbar toggleable="lg" class="navbar navbar-expand-lg navbar-light neu-navbar">
        <b-navbar-brand href="/"><img
          src="~/assets/starbrowser-logo.svg"
          alt="starbrowser"
        />Starbrowser</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/characters" class="nav-item neu-nav-item">Characters</b-nav-item>

            <b-nav-item href="/movies" class="nav-item neu-nav-item">Movies</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {
  }
};
</script>

<style lang="css" scoped>
.neu-navbar {
  /* background: #e0e5ec; */
  font-weight: 500;
  /* border-radius: 10px; */
  box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.neu-navbar .neu-navbar-brand {
  padding: 10px;
  border-radius: inherit;
  /* box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
    inset -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset 2px 2px 8px rgba(0, 0, 0, 0.15); */
}

.neu-navbar .neu-navbar-brand:hover {
  padding: 10px;
  border-radius: inherit;
  box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.neu-navbar .neu-nav-item {
  padding: 2px;
  margin-left: 16px;
  margin-top: 0;
  border-radius: 10px;
  box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.neu-navbar .active,
.neu-navbar .neu-nav-item:active {
  border-radius: 10px;
  box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
    inset -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.neu-navbar .neu-search {
  background-color: inherit;
  border-radius: 10px;
  box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
    inset -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.neu-navbar .neu-search-button {
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

.neu-navbar .neu-search-button:active {
  transform: scale(0.98);
  -webkit-transform: scale(0.98);
  -ms-transform: scale(0.98);
  -moz-transform: scale(0.98);
  box-shadow: inset -2px -2px 2px rgba(255, 255, 255, 1),
    inset -2px -2px 2px rgba(255, 255, 255, 0.5),
    inset 1px 1px 2px rgba(255, 255, 255, 0.1),
    inset 1px 1px 2px rgba(0, 0, 0, 0.15);
}

.neu-navbar .neu-navbar-toggler {
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

.neu-navbar .neu-dropdown-menu {
  background: #e0e5ec;
  border-radius: 10px;
  border: none;
  box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.15);
}

.neu-navbar .neu-dropdown-menu .neu-dropdown-item {
  margin-top: 2px;
  border-radius: 10px;
}

.neu-navbar .neu-dropdown-menu .neu-dropdown-item:hover {
  background: none;
  transform: scale(0.98);
  -webkit-transform: scale(0.98);
  -ms-transform: scale(0.98);
  -moz-transform: scale(0.98);
  box-shadow: inset -2px -2px 2px rgba(255, 255, 255, 1),
    inset -2px -2px 2px rgba(255, 255, 255, 0.5),
    inset 1px 1px 2px rgba(255, 255, 255, 0.1),
    inset 1px 1px 2px rgba(0, 0, 0, 0.15);
}

@media screen and (max-width: 991px) {
  .neu-navbar .neu-nav-item {
    margin-top: 4px;
    margin-bottom: 1rem;
  }

  .navbar-nav .nav-link {
    padding-right: 0px;
    padding-left: 1rem;
}
  
}



</style>
