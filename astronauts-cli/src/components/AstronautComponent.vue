<template>
  <div class="astronauts">
    <div
      class="row"
      v-for="astronaut in astronauts"
      v-bind:key="astronaut.astronaut_id"
    >
      <div class="col col-sm-4">
        <h2 class="mt-2">{{ astronaut.name }}</h2>
        <img
          class="astronaut_image"
          :src="require(`../assets/images/${astronaut.image}`)"
          :alt="astronaut.name"
        />
      </div>
      <div class="col col-sm-8">
        <p class="lead lead_in_list">
          <strong class="font-weight-bold">Personal Information:</strong>
          {{ astronaut.personal_data }}
        </p>
        <p>
          <a :href="url(astronaut.astronaut_id)" alt="Detail about Buzz Aldrin"
            >Read More</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Astronaut",
  props: ["astronauts"],
  setup() {
    function url(slug) {
      return `/astronauts/${slug}`;
    }

    return {
      url,
    };
  },
};
</script>

<style></style>
