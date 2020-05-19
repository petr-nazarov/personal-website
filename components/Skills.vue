<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="title is-2 has-text-centered" data-aos="fade-right">Skills</h2>
      <div class="columns">
        <div v-for="(group, index) in skills" :key="index" class="column">
          <div class="skill-group">
            <p class="group-title" data-aos="fade-right">{{ group.title }}:</p>
            <div class="skills tags">
              <span
                v-for="(skill, i) in group.skills"
                :key="i"
                class="skill tag is-medium is-white"
                data-aos="zoom-in"
              >
                {{ skill }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Skills',
  props: {
    skills: {
      type: Array,
      required: true
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
.wrapper {
  background-color: $grey;
}
.group-title {
  font-weight: 700;
  margin-bottom: 8px;
}
.skill {
  cursor: default;
  &:hover {
    background: $primary !important;
    color: $white !important;
  }
}
</style>
