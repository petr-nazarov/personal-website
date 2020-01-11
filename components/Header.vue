<template>
  <header>
    <b-navbar :fixed-top="true">
      <template slot="start">
        <b-navbar-item v-scroll-to="'#aboutme'" tag="router-link" to="#">
          About Me
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#services'" tag="router-link" to="#">
          Services
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#education'" tag="router-link" to="#">
          Education
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#employment'" tag="router-link" to="#">
          Employment
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#skills'" tag="router-link" to="#">
          Skills
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#portfolio'" tag="router-link" to="#">
          Portfolio
        </b-navbar-item>
        <b-navbar-item v-scroll-to="'#contactme'" tag="router-link" to="#">
          Contact Me
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="a">
          <span class="contact">
            <i class="fa fa-phone"> </i>
            <a
              :href="`tel:${contacts.tel.value}`"
              target="_blank"
              class="contacts-link"
              >{{ contacts.tel.value }}</a
            >
          </span>
        </b-navbar-item>
        <b-navbar-item tag="a">
          <span class="contact contact_last">
            <i class="fa fa-envelope"> </i>
            <a
              :href="`mailto:${contacts.email.value}`"
              target="_blank"
              class="contacts-link"
              >{{ contacts.email.value }}</a
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
}
</style>
