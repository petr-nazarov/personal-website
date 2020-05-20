<template>
  <div class="wrapper">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="profile-image-container">
            <img
              id="aboutme"
              class="profile-image"
              src="/images/profile/profile_crop.jpg"
              alt="Petr Nazarov"
            />
          </div>
        </div>
        <div class="column is-8">
          <div class="right-container">
            <div class="right-top-container">
              <h4 class="title is-2 about-me-title has-text-centered">
                Hi! I'm Petr! Nice to meet you.
              </h4>
              <h2 class="greeting has-text-centered has-text-secondary">
                About Me
              </h2>
              <p class="about-me-text has-text-left">
                My name is Petr Nazarov. I am a <b>Node.js</b> developer and
                <b>DevOps</b> Engineer, with over 6 years of development
                experience and more than 20 completed projects. I founded an
                outsource development company
                <a
                  href="https://frrcode.com/"
                  class="UI-external-link"
                  target="_blank"
                  ><b>FrrCode</b>
                  <font-awesome-icon
                    size="sm"
                    class="UI-external-link__icon UI-external-link__icon_small-margin"
                    :icon="['fas', 'external-link-alt']"
                /></a>
                and directed it for 4 years. Now my passion is creating advanced
                full stack applications.
                <br />
                I am in love with DevOps philosophy, and skilled in creating
                CI/CD environment for projects using Pipelines, Docker and
                Kubernetes.
              </p>
            </div>

            <div class="columns">
              <div class="column is-6 is-0-mobile"></div>
              <div class="column is-6 is-12-mobile">
                <div
                  class="columns is-mobile has-text-right has-text-centered-mobile"
                >
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
.profile-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: $tablet) {
    justify-content: center;
  }
}
.profile-image {
  display: block;
  // max-height: 410px; //mobile 310
  width: 85%;
  object-fit: cover;
  border-radius: 50%;
  //object-position: 50% 28%;
  @media (max-width: $tablet) {
    max-width: 300px;
  }
}
.greeting {
  font-size: 1.5rem;
  color: $primary;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.right-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.about-me-title {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.about-me-text {
  margin-bottom: 32px;
  font-size: 1.2rem;
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
    font-size: 1.5rem;
  }
}
</style>
