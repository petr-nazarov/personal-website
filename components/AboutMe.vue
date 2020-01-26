<template>
  <div class="wrapper">
    <div class="container">
      <div class="columns">
        <div class="column is-6 has-text-centered">
          <img
            class="profile-image"
            src="/images/profile/profile_crop.jpg"
            alt="Petr Nazarov"
          />
        </div>
        <div class="column is-6">
          <div class="right-container">
            <div class="right-top-container">
              <h4 class="greeting has-text-centered">
                Hi! I'm Petr! Nice to meet you.
              </h4>
              <h2 class="title is-2 has-text-centered has-text-secondary">
                About Me
              </h2>
              <p class="about-me-text has-text-left">
                My name is Petr Nazarov. I am a Full Stack Web and Mobile
                developer, with over 6 years of experience and more than 20
                completed projects. I am a founder of outsource web-development
                company
                <a href="https://frrcode.com/" target="_blank">FrrCode</a> and a
                main developer in it. Right now my passion is creating Full
                stack Node.js projects using Koa.js, Vue.js (Nuxt.js) and
                MongoDb and creating Mobile applications using React Native.
              </p>
            </div>

            <div class="columns">
              <div class="column is-8">
                <div class="columns is-mobile">
                  <a
                    v-for="(social, index) in socials"
                    :key="index"
                    :href="social.link"
                    class="column social-icons__element"
                    target="_blank"
                  >
                    <font-awesome-icon
                      :icon="['fab', social.icon]"
                      class="social-icons__icon fab"
                    />
                  </a>
                </div>
              </div>
              <div class="column is-0-tablet"></div>
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
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
.profile-image {
  // max-height: 410px; //mobile 310
  max-width: 380px;
  width: 85%;
  object-fit: cover;
  //object-position: 50% 28%;
  @media (max-width: $mobile) {
    max-height: 310px;
  }
}
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
  &__element {
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
