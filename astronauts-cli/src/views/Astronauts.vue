<template>
  <div class="astronauts">
    <HeaderComponent />
    <section class="list">
      <div class="container">
        <h1 class="mt-4">Top 10 Famous Astronauts</h1>
        <AstronautComponent :astronauts="state.astronauts" />
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import AstronautComponent from "../components/AstronautComponent";
import { reactive, onMounted } from "vue";
export default {
  name: "Astronauts",
  components: {
    HeaderComponent,
    FooterComponent,
    AstronautComponent,
  },
  setup() {
    const state = reactive({
      astronauts: [],
    });

    onMounted(() => {
      fetch("http://localhost:9090/api/v1/astronauts")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
          state.astronauts = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    });

    return {
      state,
    };
  },
};
</script>

<style></style>
