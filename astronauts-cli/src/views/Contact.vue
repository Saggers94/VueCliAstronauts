<template>
  <div class="contact">
    <HeaderComponent />
    <ContactFormComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ContactFormComponent from "../components/ContactFormComponent";
export default {
  name: "Contact",
  components: {
    HeaderComponent,
    FooterComponent,
    ContactFormComponent,
  },
};
</script>

<style></style>
