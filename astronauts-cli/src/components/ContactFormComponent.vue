<template>
  <!-- main section for page -->
  <section>
    <!-- Flash Message if success in any action -->

    <!-- Flash Message if error in any action -->

    <div class="container">
      <div class="row pt-3 mb-3">
        <!-- content for the contact page -->
        <div class="col col-xs-12">
          <h1 class="mt-4">Contact Us</h1>
          <form id="contact_form">
            <!-- method="post" action="/contact" <input type="hidden" name="_token" value="GyIm1U6S6FQSTccT5tmNV7vfC4bOJdHnlwpGiZix">-->

            <div class="form-group">
              <label for="name">Your Name</label>
              <input
                class="form-control"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div class="form-group">
              <label for="text">Inquiry Text</label>
              <textarea
                class="form-control"
                id="text"
                rows="3"
                name="text"
              ></textarea>
            </div>

            <p>
              <button type="submit" class="btn btn-color mb-3">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactFormComponent",
};
</script>
