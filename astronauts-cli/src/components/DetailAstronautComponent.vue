<template>
  <div class="detail_astronaut">
    <section>
      <!-- Flash Message if success in any action -->

      <!-- Flash Message if error in any action -->

      <div class="container">
        <div class="row">
          <!-- Image element - set the background image for the header in the line below -->

          <!-- Content section for the detail view of astronaut-->
          <section class="list">
            <div class="container">
              <h1 class="mt-4">Astronaut: {{ state.astronaut.name }}</h1>
              <hr class="hr_style" />

              <div class="row">
                <div class="col col-sm-4">
                  <h2 class="mt-2">{{ state.astronaut.name }}</h2>
                  <img
                    class="astronaut_image"
                    :src="state.image"
                    :alt="state.astronaut.name"
                  />
                </div>
                <div class="col col-sm-8">
                  <p class="lead lead_in_list">
                    <strong class="font-weight-bold"
                      >Personal Information:
                    </strong>
                    {{ state.astronaut.personal_data }}
                  </p>
                  <a href="/"></a>
                </div>
              </div>
              <div class="row">
                <div class="col col-sm-12">
                  <p>
                    <strong class="font-weight-bold"
                      >Career Information: </strong
                    >{{ state.astronaut.description }}
                  </p>
                  <p>
                    <strong class="font-weight-bold">Service: </strong
                    >{{ state.astronaut.service }}
                  </p>
                  <p>
                    <strong class="font-weight-bold"
                      >Days Spent In Space: </strong
                    >{{ state.astronaut.days_spent_in_space }}
                  </p>
                  <p>
                    <strong class="font-weight-bold"
                      >Nationality: {{ state.category }}</strong
                    >
                  </p>
                  <hr class="hr_style" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "DetailAstronautComponent",
  setup() {
    const route = useRoute();
    const astronautId = computed(() => route.params.id);
    const state = reactive({
      category: "",
      image: "",
      astronaut: [],
    });

    onMounted(() => {
      const url =
        "https://springastronautsboot.herokuapp.com/api/v1/astronauts/" +
        astronautId.value;
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          state.astronaut = data;
          console.log(data);
          state.category = state.astronaut.category.name;
          state.image = require("../assets/images/" + state.astronaut.image);
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
