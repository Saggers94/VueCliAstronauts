<template>
  <!-- header that includes nav -->
  <header>
    <!-- Navigation -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="main_nav"
    >
      <div class="container">
        <a class="navbar-brand" href="/">FAMOUS ASTRONAUTS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                :class="{ active: state.path == '/' }"
              >
                Home
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                to="/astronauts"
                class="nav-link"
                :class="{ active: state.path == '/astronauts' }"
                >Astronauts</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/about"
                :class="{ active: state.path == '/about' }"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link"
                :class="{ active: state.path == '/contact' }"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "HeaderComponent",
  setup() {
    const state = reactive({
      path: "",
    });

    const route = useRoute();
    state.path = route.path;
    // console.log(route.path);

    return {
      state,
    };
  },
};
</script>

<style>
body {
  padding-top: 56px;
}

#main_nav {
  background-color: #0b3d91 !important;
}
</style>
