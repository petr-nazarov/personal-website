<template>
  <div class="wrapper">
    <div class="container ">
      <h2 class="title is-2 has-text-centered">
        Do you have an interesting project?
      </h2>
      <p class=" hire-me__text  has-text-centered">
        I love chalanging projects that allow me to expand my area of expertise.
        Contact me and we can arrange a meating!
      </p>
      <div class="has-text-centered">
        <a href="#" class="button UI-button hire-me__btn">HireMe</a>
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
  background-color: $black;
  color: $white;
}
.title {
  color: $white;
}
.hire-me {
  &__text {
    margin-top: 64px;
  }
  &__btn {
    margin-top: 64px;
  }
}
</style>
