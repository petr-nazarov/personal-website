<template>
  <header>
    <b-navbar :fixed-top="true">
      <template slot="brand">
        <b-navbar-item :to="{ path: '/' }" tag="router-link">
          <h1 class="title is-1">Nazarov Petr</h1>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item v-scroll-to="'#aboutme'" tag="router-link" to="#">
          About Me
        </b-navbar-item>
        <!-- <b-navbar-item v-scroll-to="'#services'" tag="router-link" to="#">
          Services
        </b-navbar-item> -->
        <b-navbar-item v-scroll-to="'#skills'" tag="router-link" to="#">
          Skills
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#employment'" tag="router-link" to="#">
          Employment
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#education'" tag="router-link" to="#">
          Education
        </b-navbar-item>

        <b-navbar-item v-scroll-to="'#portfolio'" tag="router-link" to="#">
          Portfolio
        </b-navbar-item>
      </template>
      <template slot="end">
        <!-- Socials -->

        <b-navbar-item
          v-for="(social, index) in socials"
          :key="index"
          tag="a"
          :href="social.link"
          class="column social-icons__element"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', social.icon]"
            class="social-icons__icon fab"
          />
        </b-navbar-item>

        <b-navbar-item tag="a">
          <span class="contact contact_last">
            <font-awesome-icon :icon="['fa', 'envelope']" />
            <a
              :href="`mailto:${contacts.email.value}`"
              target="_blank"
              class="contacts-link"
              >{{ contacts.email.value }}</a
            >
          </span>
        </b-navbar-item>
        <b-navbar-item tag="a">
          <span class="contact">
            <font-awesome-icon :icon="['fa', 'phone']" />
            <a
              :href="`tel:${contacts.tel.value}`"
              target="_blank"
              class="title is-3 contacts-link contacts-link_tel "
              ><b>{{ contacts.tel.value }}</b></a
            >
          </span>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
  props: {
    contacts: {
      required: true,
      type: Object
    },
    socials: {
      required: true,
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/main';
.navbar-item {
  color: $primary !important;
  &:hover {
    color: $primary !important;
  }
}
.contacts-link {
  color: $primary;
  &:hover {
    color: $primary;
  }

  &_tel {
    font-size: 1.3rem;
  }
}
</style>
