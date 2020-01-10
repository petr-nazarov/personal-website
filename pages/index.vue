<template>
  <div>
    <about-me :socials="socials" />
    <services />
  </div>
</template>

<script lang="ts">
import AboutMe from '~/components/AboutMe.vue'
import Services from '~/components/Services.vue'
export default {
  components: {
    AboutMe,
    Services
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
