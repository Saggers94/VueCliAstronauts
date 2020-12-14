<template>
  <div class="astronauts">
    <HeaderComponent />
    <section class="list">
      <div class="container">
        <h1 class="mt-4">Top 10 Famous Astronauts</h1>
        <hr class="hr_style" />

        <div class="row">
          <div class="col col-sm-4">
            <h2 class="mt-2">Buzz Aldrin</h2>
            <img
              class="astronaut_image"
              src="../assets/images/buzz_aldrin.jpg"
              alt="Astronaut Buzz Aldrin"
            />
          </div>
          <div class="col col-sm-8">
            <p class="lead lead_in_list">
              <strong class="font-weight-bold">Personal Information: </strong
              >Edwin Eugene Aldrin Jr. was born on January 20, 1930, at
              Mountainside Hospital in Glen Ridge, New Jersey. His parents,
              Edwin Eugene Aldrin Sr. and Marion Aldrin (née Moon), lived in
              neighboring Montclair. His father was an Army aviator during World
              War I and the assistant commandant of the Army&#039;s test pilot
              school at McCook Field, Ohio, from 1919 to 1922, but left the Army
              in 1928 and became an executive at Standard Oil. Aldrin had two
              siblings, both sisters: Madeleine, who was four years older, and
              Fay Ann, who was a year and a half older. His nickname, which
              became his legal first name in 1988, arose as a result of
              Fay&#039;s mispronouncing &quot;brother&quot; as
              &quot;buzzer&quot;, which was then shortened to &quot;Buzz&quot;.
              He was a Boy Scout, achieving the rank of Tenderfoot Scout
            </p>
            <p>
              <a href="/astronauts/buzz-aldrin" alt="Detail about Buzz Aldrin"
                >Read More</a
              >
            </p>
          </div>
        </div>
        <hr class="hr_style" />
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { reactive, onMounted } from "vue";
export default {
  name: "Astronauts",
  components: {
    HeaderComponent,
    FooterComponent,
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
