<template>
  <div class="container">
    <about-me :socials="socials" />
  </div>
</template>

<script lang="ts">
import AboutMe from '~/components/AboutMe.vue'
export default {
  components: {
    AboutMe
  },
  data() {
    return {
      socials: [
        {
          link: 'https://github.com/',
          icon: 'fa-facebook-f'
        },
        {
          link: 'https://github.com/',
          icon: 'fa-linkedin-in'
        },
        {
          link: 'https://github.com/',
          icon: 'fa-github'
        },
        {
          link: 'https://github.com/',
          icon: 'fa-medium-m'
        },
        {
          link: 'https://github.com/',
          icon: 'fa-telegram-plane'
        },
        {
          link: 'https://github.com/',
          icon: 'fa-whatsapp'
        }
      ]
    }
  }
}
</script>
