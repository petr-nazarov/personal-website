<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <span class="contact">
            <i class="fa fa-phone"> </i>
            <a :href="`tel:${contacts.tel.value}`" class="contacts-link">{{
              contacts.tel.value
            }}</a>
          </span>
          <span class="contact contact_last">
            <i class="fa fa-envelope"> </i>
            <a :href="`mailto:${contacts.email.value}`" class="contacts-link">{{
              contacts.email.value
            }}</a>
          </span>
        </div>
        <div class="column is-4">
          <div class="columns is-mobile">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.link"
              class="column social-icons__element"
              target="_blank"
            >
              <i :class="social.icon" class="social-icons__icon fab"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
  props: {
    contacts: {
      required: true,
      type: Object
    },
    socials: {
      required: true,
      type: Array
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
.footer {
  color: $white;
  background-color: $black;
  padding-top: 16px;
  padding-bottom: 16px;
}
.contact {
  margin-right: 16px;
  &_last {
    margin-right: 0;
  }
}
.contacts-link {
  color: $white;
  padding-left: 4px;
  &:hover {
    color: $white;
  }
}
.social-icons {
  &__element {
    display: block;
    color: $white;

    &:hover {
      color: $secondary;
    }
  }
  &__icon {
    font-size: 1rem;
  }
}
</style>
