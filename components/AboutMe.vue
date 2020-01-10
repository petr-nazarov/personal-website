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
      <div class="social-icons">
        <a
          v-for="(social, index) in socials"
          :key="index"
          class="social-icons__element"
          :href="social.link"
          target="_blank"
        >
          <i :class="social.icon" class="social-icons__icon fab"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutMe',
  props: {
    socials: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      greeting: `Hi! I'm Petr!`,
      title: 'About Me',
      text: `I am a full-stack web developer, with 5 years of experience and more than 20 completed projects. I have a degree in Mathematics and Computer Sciences. I am a founder of outsource web-development team. Right now my passion is creating Full-stack Node.js projects using Koa.js,Nuxt and MongoDb.`
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
.greeting {
  font-size: 1.5rem;
  color: $primary;
  padding-top: 32px;
  margin-bottom: 8px;
}
.social-icons {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  &__element {
    margin-right: 16px;
    display: block;
    color: $primary;

    &:hover {
      color: $secondary;
    }
  }
  &__icon {
    font-size: 2rem;
  }
}
</style>
