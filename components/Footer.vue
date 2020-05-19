<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
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
                class="social-icons__icon"
              />
            </a>
          </div>
        </div>
        <div class="column is-4"></div>
        <div class="column is-4">
          <div class="columns  is-gapless is-mobile">
            <div class="column is-6">
              <span class="contact">
                <font-awesome-icon :icon="['fa', 'envelope']" />
                <a
                  :href="`mailto:${contacts.email.value}`"
                  target="_blank"
                  class="contacts-link"
                  >{{ contacts.email.value }}</a
                >
              </span>
            </div>
            <div class="column is-6 has-text-right">
              <span class="contact contact_last ">
                <font-awesome-icon :icon="['fa', 'phone']" />
                <a
                  :href="`tel:${contacts.tel.value}`"
                  target="_blank"
                  class="contacts-link"
                  ><b>{{ contacts.tel.value }}</b></a
                >
              </span>
            </div>
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
  white-space: nowrap;
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
