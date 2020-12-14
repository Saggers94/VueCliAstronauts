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
              <router-link to="/" class="nav-link active">
                Home
              </router-link>
              <!-- <a class="nav-link active" href="/"
                >Home
                <span class="sr-only">(current)</span>
              </a> -->
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/astronauts">Astronauts</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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
