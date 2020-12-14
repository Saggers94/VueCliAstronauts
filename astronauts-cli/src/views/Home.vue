<template>
  <div class="home">
    <HeaderComponent />
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

<style></style>
