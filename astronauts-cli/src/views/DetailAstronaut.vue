<template>
  <div class="detail_astronaut">
    <HeaderComponent />
    <DetailAstronautComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import DetailAstronautComponent from "../components/DetailAstronautComponent";
export default {
  name: "DetailAstronaut",
  props: ["astronaut"],
  components: {
    HeaderComponent,
    FooterComponent,
    DetailAstronautComponent,
  },
};
</script>

<style></style>
