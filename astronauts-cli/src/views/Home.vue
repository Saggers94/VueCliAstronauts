<template>
  <div class="home">
    <HeaderComponent />
    <!-- main section for page -->
    <section>
      <!-- Flash Message if success in any action -->

      <!-- Flash Message if error in any action -->

      <div class="container">
        <div class="row">
          <div class="col col-xs-4">
            <img
              src="../assets/images/astronaut.svg"
              class="main_astronaut_img"
            />
          </div>
          <div class="col col-xs-8 align-self-center">
            <h1 class="title">Famous Astronauts</h1>
            <p class="lead">
              Through this website you will have the information about top-notch
              Astronauts and how they contributed to the world of science.
            </p>
            <p>
              An astronaut is a person who is specially trained to travel into
              outer space. Astronauts aboard a spacecraft may have different
              responsibilities. Typically there is a commander who leads the
              mission and a pilot. Other positions may include flight engineer,
              payload commander, mission specialist, and science pilot.
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
  name: "Home",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>
.main_astronaut_img {
  width: 400px;
  height: 450px;
  padding-top: 30px;
  padding-bottom: 50px;
}
</style>
