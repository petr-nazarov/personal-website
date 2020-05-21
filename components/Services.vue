<template>
  <div class="wrapper">
    <div class="container">
      <h2
        id="services"
        class="title is-2 has-text-centered"
        data-aos="fade-right"
      >
        What can i offer
      </h2>
      <div class="columns">
        <div v-for="(service, index) in services" :key="index" class="column">
          <div class="service" data-aos="flip-left">
            <div class="service__icon has-text-centered">
              <font-awesome-icon :icon="['fas', service.icon]" />
            </div>
            <h3 class="title is-3 has-text-centered service__title">
              {{ service.name }}
            </h3>
            <p class="service__description has-text-centered ">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          icon: 'laptop-code',
          name: 'Web & Mobile applications',
          description:
            'Creating complex web and mobile applications, using best development practices.'
        },
        {
          icon: 'sync-alt',
          name: 'DevOps (CI /CD)',
          description:
            'Developing continuous integration and development pipelines, using Docker, Microservices, Kubernetes and other tools.'
        },
        {
          icon: 'chalkboard-teacher',
          name: 'Consulting',
          description:
            'Need advice with your existing application? Or are you planning to develop something new and looking for advice?'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
.wrapper {
  background-color: $grey;
}
.services__container {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.service {
  background-color: $white;
  padding: 10px;
  border-bottom: 5px solid $primary;
  border-radius: 8px;
  &:hover {
    transform: scale(1.1) !important;
  }

  &__icon {
    font-size: 3rem;
    margin-bottom: 4px;
  }
  &__description {
    height: 100px;
  }
}
</style>
