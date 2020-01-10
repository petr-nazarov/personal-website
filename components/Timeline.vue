<template>
  <div class="">
    <h2 class="title is-2 has-text-centered">{{ title }}</h2>
    <div class="line__container">
      <div
        v-for="(element, index) in elements"
        :key="index"
        class="line__element"
      >
        <h5 class="line__title">{{ element.title }}</h5>
        <p class="line__date">{{ element.date }}</p>
        <div class="line__dot" />
        <h6 class="line__subtitle">{{ element.subtitle }}</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Timeline',
  props: {
    title: {
      type: String,
      required: true
    },
    elements: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      //
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
.title {
  margin-top: 64px;
}
.line {
  &__container {
    border-left: 2px solid #ccd1d9;
    margin-left: 16px;
    padding-top: 32px;
    padding-bottom: 16px;
  }
  &__element {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 32px;
    position: relative;
  }
  &__dot {
    width: 16px;
    height: 16px;
    position: absolute;
    background-color: $white;
    left: -9px;
    border: 5px solid $primary;
    border-radius: 50%;
  }
  &__title {
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    color: $secondary;
  }
  &__subtitle {
    font-size: 14px;
    color: $secondary;
  }
  &__date {
    font-size: 15px;
    color: $secondary;
  }
}
</style>
