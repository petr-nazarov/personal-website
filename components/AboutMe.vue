<template>
  <div class="columns">
    <div class="column is-6 has-text-centered">
      <img src="https://via.placeholder.com/350" alt="My photo" />
    </div>
    <div class="column is-6">
      <h4 class="greeting has-text-centered">{{ greeting }}</h4>
      <h2 class="title is-2 has-text-centered has-text-secondary">
        {{ title }}
      </h2>
      <p class="has-text-left">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutMe',
  data() {
    return {
      greeting: `Hi! I'm Petr!`,
      title: 'About Me',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        ultrices, nulla et egestas venenatis, urna ante tincidunt erat, vitae
        lacinia ante urna dignissim purus. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nam diam
        purus, facilisis eu placerat vel, egestas vel massa. Phasellus pharetra
        urna at sem convallis bibendum. Fusce sed leo quis purus luctus tempus.
        Ut ornare mattis justo.`
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/styles/main';
.greeting {
  font-size: 1.5rem;
  color: $primary;
  padding-top: 32px;
  margin-bottom: 8px;
}
</style>
