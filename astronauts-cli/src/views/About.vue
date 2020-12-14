<template>
  <div class="about">
    <HeaderComponent />
    <section>
      <!-- Flash Message if success in any action -->

      <!-- Flash Message if error in any action -->

      <div class="container">
        <div class="row mb-4 mt-2">
          <!-- content for the about page -->
          <div class="col col-xs-4">
            <img src="../assets/images/logo.svg" class="main_astronaut_img" />
          </div>
          <div class="col col-xs-8 align-self-center">
            <h1 class="title">About Us</h1>
            <p class="lead">
              If you are interested in the infinity of galaxies, this is the
              place where you will feel inspired to be the one that pushes the
              envelope of understanding of Astronomy and contribute to finding
              new planets for saving humanity.
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
export default {
  name: "About",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style></style>
