<template>
  <div class="wrapper">
    <div class="container">
      <div class="columns">
        <div class="column is-6 has-text-centered">
          <img src="https://via.placeholder.com/350" alt="My photo" />
        </div>
        <div class="column is-6">
          <div class="right-container">
            <div class="right-top-container">
              <h4 class="greeting has-text-centered">{{ greeting }}</h4>
              <h2 class="title is-2 has-text-centered has-text-secondary">
                {{ title }}
              </h2>
              <p class="about-me-text has-text-left">
                {{ text }}
              </p>
            </div>

            <div class="social-icons">
              <a
                v-for="(social, index) in socials"
                :key="index"
                :href="social.link"
                class="social-icons__element"
                target="_blank"
              >
                <i :class="social.icon" class="social-icons__icon fab"></i>
              </a>
            </div>
          </div>
        </div>
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
      text: `I am a full-stack web developer, with over 5 years of experience and more than 20 completed projects. I am a founder of  outsource web-development company and a main developer in it.  Right now my passion is creating Full stack Node.js projects using Koa.js, Vue.js (Nuxt.js) and MongoDb and creating Mobile applications using React Native.`
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
.right-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.about-me-text {
  margin-bottom: 32px;
}
.social-icons {
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
