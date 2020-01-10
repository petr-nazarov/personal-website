<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="title is-2 has-text-centered">
        What can i offer
      </h2>
      <div class="services__container">
        <div v-for="(service, index) in services" :key="index" class="service">
          <div class="service__icon has-text-centered">
            <i class="fas" :class="service.icon"></i>
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
</template>

<script lang="ts">
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          icon: 'fa-desktop',
          name: 'Web development',
          description:
            'Creating web sites and web applications using latest technologies. From personal pages to E-comerce sites'
        },
        {
          icon: 'fa-mobile-alt',
          name: 'Mobile applications',
          description:
            'Creating IOS and Android applications using React Native'
        },
        {
          icon: 'fa-chalkboard-teacher',
          name: 'Consalting',
          description:
            'Need advise with your existing application? Or are tou planing to develop something new and looking for advise?'
        },
        {
          icon: 'fa-users',
          name: 'Leading a team',
          description:
            'If you have a development team and looking for someone to coordinate it - I am your guy.'
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
  padding-top: 64px;
  padding-bottom: 64px;
}
.services__container {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.service {
  width: 20%;
  background-color: $white;
  padding: 10px;
  border-bottom: 5px solid $primary;
  &__icon {
    font-size: 3rem;
  }
  &__title {
    //
  }
  &__description {
    //
  }
}
</style>
