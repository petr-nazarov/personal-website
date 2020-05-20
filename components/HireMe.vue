<template>
  <div class="out-wrapper">
    <div class="wrapper">
      <div class="container hire-me__container">
        <h2 class="title is-2 has-text-centered" data-aos="fade-right">
          Do you have an interesting project?
        </h2>
        <p class=" hire-me__text  has-text-centered" data-aos="fade-right">
          I love chalanging projects that allow me to expand my area of
          expertise. <br />
          Contact me and we can arrange a meating!
        </p>
        <div class="has-text-centered" data-aos="fade-left">
          <a
            href="mailto:mrzueck@gmail.com"
            target="_blank"
            class="button UI-button hire-me__btn"
            >Contact Me</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HireMe',

  data() {
    return {
      //
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';

.wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  color: $white;
}
.out-wrapper {
  background: {
    image: url('~assets/images/backgrounds/deal.jpeg');
    repeat: no-repeat;
    size: 100%;
    position: 50% 63%;
    color: $black;
  }
}
.title {
  color: $white;
}
.hire-me {
  &__container {
    max-width: 960px;
  }
  &__text {
    font-size: 1.5rem;
    margin-top: 64px;
  }
  &__btn {
    margin-top: 64px;
  }
}
</style>
